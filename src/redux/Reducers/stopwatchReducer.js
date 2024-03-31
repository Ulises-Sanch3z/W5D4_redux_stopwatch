import { START_TIMER, STOP_TIMER, RESET_TIMER, INCREMENT_TIME } from '../Actions/stopwatchActions';

const initialState = {
  time: 0,
  isRunning: false,
};

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return { ...state, isRunning: true };
    case STOP_TIMER:
      return { ...state, isRunning: false };
    case RESET_TIMER:
      return { ...initialState };
    case INCREMENT_TIME:
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
};

export default stopwatchReducer;
