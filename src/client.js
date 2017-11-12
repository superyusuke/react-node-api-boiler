'use strict'
// REACT
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// Redux
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// Import Component
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import FetchButtonContainer from './containers/FetchButtonContainer'

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index'
// STEP 1 create the store
const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducers, middleware)

// REACT-ROUTER
//import from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <FetchButtonContainer />
        <Switch>
          <Route exact path="/" component={Test1}/>
          <Route path="/" component={Test2}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

render(
  Routes, document.getElementById('app'),
)