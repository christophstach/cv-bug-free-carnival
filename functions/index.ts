/*const https = require('firebase-functions').https;
const setupServer = require('./src/graphql/server.js').setupServer;

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.api = https.onRequest(setupServer());
*/

import { https } from 'firebase-functions';
import { setupServer } from './graphql/server';
import { environment } from './environment';


const app = setupServer();

if (environment.development) {
  const server = app.listen(3000);

  server.on('listening', () => {
    console.log('Server is listening on port 3000');
  });
}

export const api = https.onRequest(app);
