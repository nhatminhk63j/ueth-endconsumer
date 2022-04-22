import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyA19WY6r5V8QgROCdaAEZDB7akf5bpGU3A',
  authDomain: 'my-fresh-merchant.firebaseapp.com',
  projectId: 'my-fresh-merchant',
  storageBucket: 'my-fresh-merchant.appspot.com',
  messagingSenderId: '486645344140',
  appId: '1:486645344140:web:cbf058d4277854aaf758a9',
  measurementId: 'G-QDQGFEJ3DF',
};
firebase.initializeApp(firebaseConfig);
export default firebase;
