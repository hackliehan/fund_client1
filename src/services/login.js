import { p_login } from '../config/path';
import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request(p_login, {
    method: 'POST',
    data: params,
  });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
