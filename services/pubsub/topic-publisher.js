// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further us

let  projectId = 'admin-project-296219';
const pubSubClient = new PubSub({projectId});

async function listAllTopics() {
  // Lists all topics in the current project
  const [topics] = await pubSubClient.getTopics();
  console.log('Topics:');
  topics.forEach(topic => {
      if(topic.name.includes('my-topic')){
          topic.publish(Buffer.from('my test message!'));
      }
  });
}

listAllTopics().catch(console.error);