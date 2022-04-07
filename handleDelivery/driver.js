'use strict';

const eventPool = require('../eventPool.js');

module.exports = {
  onDelivery: (payload) => {
    console.log('DRIVER: picked up', payload.orderID);
    eventPool.emit('IN TRANSIT', payload)
    console.log('DRIVER: delivered', payload.orderId)
    eventPool.emit('DELIVERED', payload)
  }
};
