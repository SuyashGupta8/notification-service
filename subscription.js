'use strict';

var processor = require('./services/Processor'),
publisher = require('./services/Publisher');
const {PubSub} = require('@google-cloud/pubsub'),
pubSubClient = new PubSub();

let subscriber = function(message, context){
    const data = message.data
      ? Buffer.from(message.data, 'base64').toString()
      : 'message not found';

      new publisher(new processor(data).buildMessage()).sendMessage(); //
  };


  module.exports = {
      subscriber: subscriber
  }


  /**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';
// const timeout = 60;

// Imports the Google Cloud client library


// Creates a client; cache this for further use


function listenForMessages() {
  // References an existing subscription
  const subscription = pubSubClient.subscription(subscriptionName);

  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = message => {
    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);
    messageCount += 1;

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Listen for new messages until timeout is hit
  subscription.on('message', messageHandler);

  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}

listenForMessages();