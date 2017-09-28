/*const https = require('firebase-functions').https;
const setupServer = require('./src/graphql/server.js').setupServer;

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.api = https.onRequest(setupServer());
*/

import { https } from 'firebase-functions';
import { setupServer } from './graphql/server';

export const api = https.onRequest(setupServer());
