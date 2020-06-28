import request from '@/utils/request';
import axios from 'axios'
import { p_login } from '../config/path';

export async function fakeAccountLogin(params) {
  return axios.post(p_login,params);
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
