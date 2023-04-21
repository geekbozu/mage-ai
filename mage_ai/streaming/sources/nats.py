from dataclasses import dataclass
from mage_ai.shared.config import BaseConfig
from mage_ai.streaming.constants import DEFAULT_BATCH_SIZE
from mage_ai.streaming.sources.base import BaseSource
from mage_ai.streaming.sources.shared import SerializationMethod, SerDeConfig
from typing import Callable, Dict
import json
import nats,asyncio

DEFAULT_WAIT_TIME_SECONDS = None


@dataclass
class NatsConfig(BaseConfig):
    server_urls: list[str]
    subject_name: str
    durable_name: str
    stream_name: str
    batch_size: int = DEFAULT_BATCH_SIZE
    # todo security items?
    wait_time_seconds: int = DEFAULT_WAIT_TIME_SECONDS


class NatsSource(BaseSource):
    config_class = NatsConfig
    consume_method = "READ_ASYNC"

    def init_client(self):
        self._print('Start initializing consumer.')
        # Initialize nats jetstream consumer
        try:
            loop = asyncio.get_event_loop()
            self._print(f'Connecting to {self.config.server_urls}')
            self.nc = loop.run_until_complete(nats.connect(self.config.server_urls,
                                               connect_timeout=60,
                                               max_reconnect_attempts=-1)) 

        # Create JetStream context.
            self.js = self.nc.jetstream()
            self.subscription = loop.run_until_complete(self.js.pull_subscribe(self.config.subject_name,
                                                    self.config.durable_name,
                                                    self.config.stream_name
                                                    ))
        except Exception as e:
            self._print(f'{self.config.server_urls}')
            self._print(e)
            raise
        self._print(self.nc.servers)
        self._print('Finish initializing consumer.')


    def read(self, handler: Callable):
        pass
    
    def batch_read(self, handler: Callable):
        return super().batch_read(handler)

    async def read_async(self, handler: Callable):
        self._print('Start consuming messages.')
        
        if self.config.batch_size > 0:
            batch_size = self.config.batch_size
        else:
            batch_size = DEFAULT_BATCH_SIZE

        try:
            while True:
                try:
                    messages = await self.subscription.fetch(batch_size,
                                                        self.config.wait_time_seconds)
                except nats.errors.TimeoutError:
                    continue

                parsed_messages = []
                for msg in messages:
                    await msg.ack()
                    parsed_messages.append(msg.data)
                    
                if len(parsed_messages) > 0:
                    self._print(f'Received {len(parsed_messages)} message. '
                                f'Sample: {parsed_messages[0]}.')
                    handler(parsed_messages)

        except Exception:
            self._print(f'Couldn\'t receive messages from queue {self.config.subject_name}.')
            raise


