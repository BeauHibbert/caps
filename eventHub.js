'use strict';

const eventPool = require('../eventPool.js');
const { onPickUp } = require('./createOrder/vendor');
const { onDelivery } = require('./handleDelivery/driver');
const logger = require('./lib/eventManager');

module.exports = () => {
  eventPool.on('PICKUP', onPickUp);
  eventPool.on('DELIVERY', onDelivery);
  eventPool.on('PICKUP', (payload) => {
    logger('PICKUP', payload)
  });
  eventPool.on('IN TRANSIT', (payload) => {
    logger('IN TRANSIT', payload)
  });

  eventPool.on('DELIVERY', (payload) => {
    logger('DELIVERY', payload)
  });
};
