import {createStore, applyMiddleware} from 'redux';
// import { rootReducer } from '../Reducers/index';
import { filteredListReducer } from '../Reducers/index';
import thunk from 'redux-thunk';

const store = createStore(filteredListReducer, applyMiddleware(thunk));

export default store;