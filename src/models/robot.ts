import { Reducer, Effect } from 'umi';
import { getLists } from '@/services/robot';

export interface StateType {
  status?: 'ok' | 'error';
  type?: string;
}

export interface LoginModelType {
  namespace: string;
  state: StateType;
  effects: {
    getrobotlists: Effect;
  };
  reducers: {
    changeRobotLists: Reducer<StateType>;
  };
}

const RobotModel: LoginModelType = {
  namespace: 'robot',
  state: {
    status: undefined,
  },

  effects: {
    *getrobotlists({ payload }, { call, put }) {
      const response = yield call(getLists, payload);
      yield put({
        type: 'changeRobotLists',
        payload: response,
      });
    },
  },

  reducers: {
    changeRobotLists(state, { payload }) {
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};

export default RobotModel;
