import Axios from 'axios';
import {
    p_fund_backtetst,
    p_fund_sty_search,
    p_fund_sty_add,
    p_fund_sty_del,
    p_fund_sty_update
} from '../../../config/path';

export async function fetchBackTestData(params){
  return Axios.post(p_fund_backtetst,params);
}

export async function fetchFundStrategies(params){
  return Axios.post(p_fund_sty_search,params);
}

export async function addFundStrategy(params){
  return Axios.post(p_fund_sty_add,params)
}

export async function delFundStrategy(params){
  return Axios.post(p_fund_sty_del,params)
}

export async function updateFundStrategy(params){
  return Axios.post(p_fund_sty_update,params)
}
