import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import SignInWithComponent from './SignInWithComponent'
import SignInWithHook from './SignInWithHook'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <div>
            <Link to='/hook'>Hook</Link>
          </div>
          <div>
            <Link to='/component'>Component</Link>
          </div>
        </Route>
        <Route exact path='/hook'>
          <SignInWithHook />
        </Route>
        <Route exact path='/component'>
          <SignInWithComponent />
        </Route>
        <Route exact path='/home'>
          <App />
        </Route>
        <Route exact path='/redirect'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
