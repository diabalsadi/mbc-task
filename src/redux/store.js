// Redux core
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
// Slices
import articles from './slices/articles';
import modalSlice from './slices/modal';
import themes from './slices/themes';

const reducer = combineReducers({
  articles: articles.reducer,
  themes: themes.reducer,
  modal: modalSlice.reducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
