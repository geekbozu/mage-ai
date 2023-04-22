from mage_ai.streaming.sources.nats import NatsSource
from mage_ai.tests.base_test import TestCase
from unittest.mock import patch


class NatsTests(TestCase):
    def test_init(self):
        with patch.object(NatsSource, 'init_client') as mock_init_client:
            NatsSource(dict(
                server_urls=['nats://demo.nats.io:4222'],
                connector_type="nats",
                subject_name="test",
                wait_time_seconds=1
            ))
            mock_init_client.assert_called_once()

    def test_init_invalid_config(self):
        with patch.object(NatsSource, 'init_client') as mock_init_client:
            with self.assertRaises(Exception) as context:
                NatsSource(dict(
                    connector_type="nats",
                    subject_name="test",
                    wait_time_seconds=1
                ))
            self.assertTrue(
                '__init__() missing 1 required positional argument: \'server_urls\''
                in str(context.exception),
            )
            self.assertEqual(mock_init_client.call_count, 0)
