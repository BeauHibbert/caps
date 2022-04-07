'use strict';

const eventPool = require('../eventHub.js');
const orderHandler = require('./createOrder');
const deliveryHandler = require('./handleDelivery');
const logger = require('./lib/eventManager');
const Chance = require('chance');
const chance = new Chance();

module.exports = (eventName) => {
  eventPool.on('PICKUP', orderHandler);
  eventPool.on('DELIVERY', deliveryHandler);
  eventPool.on('PICKUP', (payload) => {
    logger('PICKUP', payload)
  });
  eventPool.on('DELIVERY', (payload) => {
    logger('DELIVERY', payload)
  });
};
