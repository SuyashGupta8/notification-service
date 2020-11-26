const {PubSub} = require('@google-cloud/pubsub'),
data = require('./config.json').config;

async function quickstart( projectId, topicName, subscriptionName) {

  const pubsub = new PubSub({projectId});

  // Creates a new topic
  console.log('topic name '+ topicName);
  const [topic] = await pubsub.createTopic(topicName);

  // Creates a subscription on that new topic
  /*const [subscription] = await topic.createSubscription(subscriptionName);

  // Receive callbacks for new messages on the subscription
  subscription.on('message', message => {
    console.log('Received message:', message.data.toString());
    process.exit(0);
  });

  // Receive callbacks for errors on the subscription
  subscription.on('error', error => {
    console.error('Received error:', error);
    process.exit(1);
  }); */

  // Send a message to the topic
  topic.publish(Buffer.from('Test message!'));
}

quickstart(data.pid, data.topic,  data.sub).then(res =>{
    console.log(`Topic ${data.pid} successfully created `);
}).catch(err =>{
    console.log( ` while creating topic ${data.pid} error obtained: `+ err);
})


