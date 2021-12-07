import axios from 'axios';
import AuthService from './Auth.service';
import { toastrError } from '../../Services/ToasterService';

export default function handleReqRes(history) {
  // console.log('history', history);
  axios.interceptors.request.use(config => {
    console.log('Request was sent');
    const userValues = AuthService.getCurrentUser();
    config.headers.Cookie_x = "ci_session=" + userValues?.session_id;
    return config;
  }, error => {
    // handle the error
    return Promise.reject(error);
  });

  axios.interceptors.response.use((response) => {
    // do something with the response data
    console.log('Response was received');
    if (response.data && response.data.status_code === 403) {
      toastrError('Session Expired.');
      AuthService.logout(history);
      return Promise.reject('Session Expired.');
    }
    return response;
  }, error => {
    // handle the response error
    return Promise.reject(error);
  });
}