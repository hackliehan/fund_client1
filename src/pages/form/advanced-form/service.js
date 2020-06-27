import request from 'umi-request';

export async function fetchBackTestData(params){
  return request('/fund/backtest',{
    method:'POST',
    data:params
  });
}

export async function fetchFundStrategies(params){
  return request('/fund/searchSty',{
    method:'POST',
    data:params
  });
}

export async function addFundStrategy(params){
  return request('/fund/addSty',{
    method:'POST',
    data:params
  })
}

export async function delFundStrategy(params){
  return request('/fund/delSty',{
    method:'POST',
    data:params
  })
}

export async function updateFundStrategy(params){
  return request('/fund/updateSty',{
    method:'POST',
    data:params
  })
}
