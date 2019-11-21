import { createStore, applyMiddleware } from 'redux';
import reducer from '../../app/redux/reducers';
import thunk from 'redux-thunk';


const configureStore = (initState = {}) => createStore(reducer, initState, applyMiddleware(thunk));

export default configureStore;