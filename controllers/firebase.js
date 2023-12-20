const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');
const firebaseConfig = require('../firebase_config');

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      ...firebaseConfig,
    });
  }
} catch (error) {
  console.error('Error initializing Firebase Admin:', error);
}

const firestore = admin.firestore();

module.exports = {
  firestore,
};
