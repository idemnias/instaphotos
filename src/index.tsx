import './index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
/* import createHistory from 'history/createBrowserHistory' */
import { createBrowserHistory } from 'history';
import { Router } from 'react-router'
import {Provider} from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as FormReducer } from 'redux-form'

import App from './App';
import reportWebVitals from './reportWebVitals'
import * as reducers from './ducks'
import services from './services'


const store = createStore(combineReducers({
  ...reducers,
  form: FormReducer,
}), applyMiddleware(thunk.withExtraArgument(services)))

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
       <App history={history}/>
    </Router>
  </Provider>,

  document.getElementById('root') as HTMLElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()