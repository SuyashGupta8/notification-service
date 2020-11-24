'use strict';

var processor = require('./services/Processor'),
publisher = require('./services/Publisher');

let subscriber = function(message, context){
    const data = message.data
      ? Buffer.from(message.data, 'base64').toString()
      : 'message not found';

      new publisher(new processor(data).buildMessage()).sendMessage(); //
  };


  module.exports = {
      subscriber: subscriber
  }