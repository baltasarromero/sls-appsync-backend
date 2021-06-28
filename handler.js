'use strict';

module.exports.graphql = (event, context, callback ) => {
  console.log('Received event {}', JSON.stringify(event, 3));

  const consumerKey = event.arguments.consumer_key;
  const consumerSecret = event.arguments.consumer_secret;

  console.log('Got an invoke request');
  switch(event.field) {
    case 'helloWorld': {
      callback(null, 'Hello World');
      break;
    }

    default: {
      callback(`Unkown field, unable to resolve ${event.field}`, null);
    }
  }
};
