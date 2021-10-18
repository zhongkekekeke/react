import { createReducerContext } from '../../lesson-7/7.6-UseShareState';
import _ from 'lodash';

const initialState = {};

const ACTION = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const [ShareStateProvider, useShareState] = createReducerContext(
  reducer,
  initialState
);

export { ShareStateProvider, useShareState, ACTION };
