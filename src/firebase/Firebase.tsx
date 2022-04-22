import * as React from 'react';
import api from 'utils/helpers/api';
import firebase from './firebaseConfig';
// import tingAudio from 'assets/icons/ting.mp3';
import { TOKEN } from 'constants/constants';

interface Props {
  children: any;
}
export const firebaseUnregister = async () => {
  const messaging = firebase.messaging();
  await messaging
    .requestPermission()
    .then(async () => {
      const token = await messaging.getToken();
      if (token) {
        await api({
          method: 'delete',
          url: '/msgs/notify/token/unregister',
          params: { token },
          headers: { 'msg-app': 'fresh-merchant' },
        });
        // localStorage.removeItem(TOKEN);
        // localStorage.removeItem(REFRESH_TOKEN);
      }
    })
    .catch(err => {});
};
export const firebaseRegister = async () => {
  const messaging = firebase.messaging();
  await messaging
    .requestPermission()
    .then(async function () {
      const token = await messaging.getToken();
      if (token) {
        await api({
          method: 'post',
          url: '/msgs/notify/token/register',
          data: { platform: 'WEB', token },
          headers: { 'msg-app': 'fresh-merchant' },
        });
      }
    })
    .catch(function (err) {});
};
const Firebase: React.FunctionComponent<Props> = props => {
  let messaging;
  if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging();
  }
  React.useEffect(() => {
    if (localStorage.getItem(TOKEN) && messaging) firebaseRegister(); // eslint-disable-next-line
  }, [messaging]);
  React.useEffect(() => {
    messaging &&
      messaging.onMessage((res: any) => {
        // const audioPlayer = new Audio(tingAudio);
        // audioPlayer.play();
      });
  }, [messaging]);

  return <>{props.children}</>;
};

export default Firebase;
