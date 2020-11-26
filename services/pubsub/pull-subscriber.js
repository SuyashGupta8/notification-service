/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const subscriptionName = 'Test_Pull_Subscription',
data = require('./config.json').config;
timeout = 60;

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub({projectId : data.pid});


(async function (){

    const [topics] = await pubSubClient.getTopics();

    let isSubPresent = false;
    let [subscriptions] = await pubSubClient.getSubscriptions();
    let [subscription] = subscriptions.filter(sub => {
        console.log('subscription presents are ', sub);
        return sub.name.includes(subscriptionName);
    });

    let [topic] = topics.filter((topic) =>{
        return topic.name.includes(data.topic);
    });

    if(!subscription) [subscription] = await topic.createSubscription(subscriptionName);
    messageLitener(subscription);

})().then(res =>{
}).catch(err =>{
    console.error('Error while creating sub: ', err);
});

function messageLitener(subscription){

    let msgCount = 0;
    subscription.on('message', msg =>{
        msgCount++;
        console.log('Received message:', msg.data.toString(), ' msgCount ', msgCount);
    });

    subscription.on('error', error => {
    console.error('Received error:', error);
    process.exit(1);
  }); 

}