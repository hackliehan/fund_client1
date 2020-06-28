import request from 'umi-request';
import Axios from 'axios';
import { p_login } from '../../../config/path';

export async function fakeAccountLogin(params) {
  return Axios.post(p_login, params);
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
