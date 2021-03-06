'use strict';

const eventPool = require('../eventPool.js');
const Chance = require('chance');
const chance = new Chance();

module.exports = {
  onPickUp: (storename) => {
    const payload = {
      store: storename,
      orderId: chance.guid(),
      customer: chance.name(),
      address: `${chance.city()}, ${chance.state()}`,
    };
    eventPool.emit('PICKUP', payload);

  }
};




