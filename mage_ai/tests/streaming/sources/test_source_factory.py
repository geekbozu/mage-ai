from mage_ai.streaming.sources.azure_event_hub import AzureEventHubSource
from mage_ai.streaming.sources.kafka import KafkaSource
from mage_ai.streaming.sources.rabbitmq import RabbitMQSource
from mage_ai.streaming.sources.nats import NatsSource
from mage_ai.streaming.sources.source_factory import SourceFactory
from mage_ai.tests.base_test import TestCase
from unittest.mock import patch


class SourceFactoryTests(TestCase):
    def test_get_source_kafka(self):
        with patch.object(KafkaSource,
                          '__init__',
                          return_value=None) as mock_init:
            config = dict(
                connector_type='kafka',
            )
            source = SourceFactory.get_source(config)
            self.assertIsInstance(source, KafkaSource)
            mock_init.assert_called_once_with(config)

    def test_get_source_azure_event_hub(self):
        with patch.object(AzureEventHubSource,
                          '__init__',
                          return_value=None) as mock_init:
            config = dict(
                connector_type='azure_event_hub',
            )
            source = SourceFactory.get_source(config)
            self.assertIsInstance(source, AzureEventHubSource)
            mock_init.assert_called_once_with(config)

    def test_get_source_rabbitmq(self):
        with patch.object(RabbitMQSource,
                          '__init__',
                          return_value=None) as mock_init:
            config = dict(
                connector_type='rabbitmq',
            )
            source = SourceFactory.get_source(config)
            self.assertIsInstance(source, RabbitMQSource)
            mock_init.assert_called_once_with(config)

    def test_get_source_nats(self):
        with patch.object(NatsSource,
                          '__init__',
                          return_value=None) as mock_init:
            config = dict(
                connector_type='nats',
            )
            source = SourceFactory.get_source(config)
            self.assertIsInstance(source, NatsSource)
            mock_init.assert_called_once_with(config)

    def test_get_source_other(self):
        s = "Consuming data from random is not supported " \
            "in streaming pipelines yet."
        with self.assertRaises(Exception) as context:
            SourceFactory.get_source(dict(
                connector_type='random',
            ))
        self.assertTrue(
            s
            in str(context.exception),
        )
