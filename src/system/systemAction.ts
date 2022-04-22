import { TOKEN, REFRESH_TOKEN } from 'constants/constants';
import { firebaseUnregister } from 'firebase/Firebase';
import api from 'utils/helpers/api';
import { configs } from 'utils/helpers/config';

export const getRefreshToken = (refreshToken: string) => {
  return api({
    method: 'get',
    url: '/auth/v2/refresh-token',
    params: { refreshToken },
    baseURL: configs().GATE_URl,
  });
};
export const requestLogout = async () => {
  try {
    await firebaseUnregister();
    await api({
      method: 'delete',
      url: '/auth/v2/logout',
      data: {},
      baseURL: configs().GATE_URl,
    });
  } catch (error) {
  } finally {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    window.location.href = '/login';
  }
};
