from dataclasses import dataclass
from mage_ai.shared.config import BaseConfig
from mage_ai.streaming.constants import DEFAULT_BATCH_SIZE
from mage_ai.streaming.sources.base import BaseSource
from mage_ai.streaming.sources.shared import SerializationMethod, SerDeConfig
from typing import Callable, Dict
import json
import nats
import nats.errors
import asyncio

DEFAULT_WAIT_TIME_SECONDS = None
DEFAULT_CONNECTION_TIMEOUT = 60
DEFAULT_RECONNECT_ATTEMPTS = -1


@dataclass
class JetstreamConfig:
    durable_name: str | None = None
    stream_name: str | None = None
    batch_size: int = DEFAULT_BATCH_SIZE


@dataclass
class NatsConfig(BaseConfig):
    server_urls: list[str]
    subject_name: str
    username: str | None = None
    password: str | None = None
    nkey: str | None = None
    queue_group: str | None = None
    connection_timeout: int = DEFAULT_CONNECTION_TIMEOUT
    reconnect_attempts: int = DEFAULT_RECONNECT_ATTEMPTS
    wait_time_seconds: int | None = DEFAULT_WAIT_TIME_SECONDS
    jetstream_config: JetstreamConfig | None = None

    @classmethod
    def parse_config(cls, config: Dict) -> Dict:
        jetstream_config = config.get('jetstream_config')
        if jetstream_config and type(jetstream_config) is dict:
            config['jetstream_config'] = JetstreamConfig(**jetstream_config)
        return config


class NatsSource(BaseSource):
    config_class = NatsConfig
    consume_method = "READ_ASYNC"

    def init_client(self):
        self._print("Start initializing consumer.")
        # Initialize nats jetstream consumer
        try:
            loop = asyncio.get_event_loop()
            self._print(f"Connecting to {self.config.server_urls}")

            # todo add security context items here.
            self.nc = loop.run_until_complete(
                nats.connect(
                    self.config.server_urls,
                    connect_timeout=self.config.connection_timeout,
                    max_reconnect_attempts=self.config.reconnect_attempts,
                )
            )

            if self.config.jetstream_config is not None:
                self._print(
                    f"Subject: {self.config.subject_name}," +
                    f" Durable: {self.config.jetstream_config.durable_name}," +
                    f" Stream: {self.config.jetstream_config.stream_name}")

                self.js = self.nc.jetstream()
                self.js_subscription = loop.run_until_complete(
                    self.js.pull_subscribe(
                        self.config.subject_name,
                        self.config.jetstream_config.durable_name,
                        self.config.jetstream_config.stream_name,
                    )
                )
            else:
                self._print(
                    f"Subject: {self.config.subject_name}," +
                    f" Queue: {self.config.queue_group},")

                self.subscription = loop.run_until_complete(
                    self.nc.subscribe(subject=self.config.subject_name,
                                      queue=self.config.queue_group)
                )

        except Exception as e:
            self._print(f"{self.config.server_urls}")
            self._print(e)
            raise
        self._print(self.nc.servers)
        self._print("Finish initializing consumer.")

    async def read_async(self, handler: Callable):
        self._print("Start consuming messages.")

        try:
            while True:
                try:
                    messages_to_process = []

                    if self.config.jetstream_config is not None:
                        messages = await self.js_subscription.fetch(
                            self.config.jetstream_config.batch_size,
                            self.config.wait_time_seconds
                        )

                        for msg in messages:
                            await msg.ack()
                            messages_to_process.append(msg.data)
                    else:
                        messages_to_process.append(
                            await self.subscription.next_msg(self.config.wait_time_seconds)
                        )
                except nats.errors.TimeoutError:

                    continue

                if len(messages_to_process) > 0:
                    handler(messages_to_process)

        except Exception:
            self._print(
                f"Couldn't receive messages from queue {self.config.subject_name}."
            )
            raise

    def batch_read(self, handler: Callable):
        return super().batch_read(handler)

    def read(self, handler: Callable):
        return super().read(handler)
