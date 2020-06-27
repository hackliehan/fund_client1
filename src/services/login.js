import { p_login } from '../config/path';
import request from '@/utils/request';
import axios from 'axios'

export async function fakeAccountLogin(params) {
  return axios.post(p_login,params);
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
