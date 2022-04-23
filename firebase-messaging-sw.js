/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js'
);
/* eslint-disable no-undef */
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
// const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler((payload) => {
//   console.log('payload', payload);
//   const promiseChain = clients
//     .matchAll({
//       type: 'window',
//       includeUncontrolled: true,
//     })
//     .then((windowClients) => {
//       for (let i = 0; i < windowClients.length; i++) {
//         const windowClient = windowClients[i];
//         windowClient.postMessage(payload?.data?.type);
//       }
//     })
//     .then(() => {
//       return registration.showNotification('my notification title');
//     });
//   return promiseChain;
// });
// eslint-disable-next-line
self.addEventListener('notificationclick', function (event) {
  // handle click notification
});
// eslint-disable-next-line
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const content = JSON.parse(data.data.vi);
  self.registration.showNotification(content.title, {
    body: content.content,
    icon: data.data.icon,
  });
});
