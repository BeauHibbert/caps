'use strict';

const eventPool = require('../eventHub.js');
const orderHandler = require('./createOrder');
const deliveryHandler = require('./handleDelivery') 
const Chance = require('chance');
const chance = new Chance();

module.exports = (eventName) => {
  eventPool.on('PICKUP', orderHandler);
  eventPool.on('DELIVERY', deliveryHandler);

  // "EVENT": { 
  //   "event": "pickup",
  //   "time": "2020-03-06T18:27:17.732Z",
  //   "payload": { 
  //     "store": "1-206-flowers",
  //     "orderID": "e3669048-7313-427b-b6cc-74010ca1f8f0",
  //     "customer": "Jamal Braun",
  //     "address": "Schmittfort, LA"
  //   }
  // }

};