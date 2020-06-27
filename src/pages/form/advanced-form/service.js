import request from 'umi-request';
import {
    p_fund_backtetst,
    p_fund_sty_search,
    p_fund_sty_add,
    p_fund_sty_del,
    p_fund_sty_update
} from '../../../config/path';

export async function fetchBackTestData(params){
  return request(p_fund_backtetst,{
    method:'POST',
    data:params
  });
}

export async function fetchFundStrategies(params){
  return request(p_fund_sty_search,{
    method:'POST',
    data:params
  });
}

export async function addFundStrategy(params){
  return request(p_fund_sty_add,{
    method:'POST',
    data:params
  })
}

export async function delFundStrategy(params){
  return request(p_fund_sty_del,{
    method:'POST',
    data:params
  })
}

export async function updateFundStrategy(params){
  return request(p_fund_sty_update,{
    method:'POST',
    data:params
  })
}
