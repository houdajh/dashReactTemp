import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'

import { createStore } from 'redux'
import { Route, Switch ,BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'
import SignIn from './SignIn'
import Customers from './pages/Customers'
import Layout from './components/layout/Layout'

const store = createStore(
  rootReducer
)

document.title = 'Paris JJ'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
            <Switch><Route path='/' exact component={Layout}/>
            <Route path='/signIn'exact component={SignIn}/>
            </Switch>
     </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
