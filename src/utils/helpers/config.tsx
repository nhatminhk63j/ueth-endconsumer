import { CA_INFO, CA_INFO_DEV } from 'constants/constants';
export const configs = () => {
  if (
    window.location.hostname.includes('dev') ||
    process.env.NODE_ENV === 'development'
  ) {
    return {
      APP_KEY: CA_INFO_DEV.appKey,
      APP_ID: CA_INFO_DEV.appId,
      VERSION: '1.0',
      UPLOAD_URL: 'https://assets.dev.tripi.vn',
      BASE_URL: 'https://merchant-service.uethackathon.tripi.vn/api/v1/',
      GATE_URl: 'https://gate.dev.tripi.vn',
    };
  }
  if (window.location.hostname.includes('stag')) {
    return {
      APP_KEY: CA_INFO.appKey,
      APP_ID: CA_INFO.appId,
      VERSION: '1.0',
      UPLOAD_URL: 'https://assets.dev.tripi.vn',
      BASE_URL: 'https://gate.dev.tripi.vn',
    };
  }
  return {
    APP_KEY: CA_INFO_DEV.appKey,
    APP_ID: CA_INFO_DEV.appId,
    VERSION: '1.0',
    UPLOAD_URL: 'https://assets.dev.tripi.vn',
    BASE_URL: 'https://merchant-service.uethackathon.tripi.vn',
    GATE_URl: 'https://gate.dev.tripi.vn',
  };
};
