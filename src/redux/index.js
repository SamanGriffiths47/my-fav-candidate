import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import themeReducer from './reducers/themeReducer'

const store = createStore(
  combineReducers({
    themeState: themeReducer
  }),
  composeWithDevTools()
)

export default store
