import request from 'umi-request';
import { p_login } from '../../../config/path';
import Axios from 'axios';

export async function fakeAccountLogin(params) {
  return Axios.post(p_login, params);
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
