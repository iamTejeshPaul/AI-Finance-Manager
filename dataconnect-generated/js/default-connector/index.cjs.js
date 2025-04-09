const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'finance-manager',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

