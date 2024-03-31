import { createStore } from 'redux';
import stopwatchReducer from '../Reducers/stopwatchReducer';

const store = createStore(stopwatchReducer);

export default store;
