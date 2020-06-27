import { message } from 'antd';
import {
    fetchBackTestData,
    addFundStrategy,
    updateFundStrategy,
    fetchFundStrategies,
    delFundStrategy
} from './service';

const Model = {
  namespace: 'fundValBackTest',
  state: {
    backtestResult:[],
    styList:[],
    pagination:{page: 1, pageSize: 5, total: 0}
  },
  effects: {
    *fetchBacktestData({ payload }, { call,put }) {
      const response = yield call(fetchBackTestData, payload);
      if(response.data.successed){
        yield put({
          type:'updateBacktestRs',
          payload:response.data.data
        })
      }else{
        message.error('获取回测结果失败!');
      }
    },
    *fetchFundStyData({ payload }, { call,put }) {
      const response = yield call(fetchFundStrategies, payload);
      if(response.data.successed){
        yield put({
          type:'updateFundStrategies',
          payload:response.data.data
        })
      }else{
        message.error('获取策略列表失败!');
      }
    },
    *addSty({payload},{call}){
      const response = yield call(addFundStrategy, payload);
      message.success(response.data.message);
    },
    *delSty({payload},{call}){
      const response = yield call(delFundStrategy, payload);
      message.success(response.data.message);
    },
    *updateSty({payload},{call}){
      const response = yield call(updateFundStrategy, payload);
      message.success(response.data.message);
    }
  },
  reducers:{
    updateBacktestRs(state,action){
      return {...state,backtestResult:action.payload}
    },
    updateFundStrategies(state,action){
      return {...state,styList:action.payload.data}
    }
  }
};
export default Model;
