import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { environment } from './environment';
import { Firestore } from '@google-cloud/firestore';

let db: Firestore;

if (environment.development) {
  db = null;
} else {
  admin.initializeApp(functions.config().firebase);
  db = admin.firestore();
}

export const firestore = db;
