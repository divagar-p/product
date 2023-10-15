import { combineReducers } from 'redux';
import productReducer from './slice/product';
import categoryReducer from './slice/category';

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
});

export default rootReducer;
