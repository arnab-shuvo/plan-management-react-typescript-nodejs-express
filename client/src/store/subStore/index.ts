import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authStore';
import utilityReducer from './utilityStore';
import userReducer from './userStore';
import planReducer from './planStore';

const persistConfig = {
	key: 'root',
	storage: storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const reducers = combineReducers({
	authReducer: persistedReducer,
	utilityReducer,
	userReducer,
	planReducer,
});

export default reducers;
