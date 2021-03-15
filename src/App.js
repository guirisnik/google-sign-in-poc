import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const loginData = JSON.parse(localStorage.loginData)
    setUser(() => loginData.profileObj)
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <pre>Hello, {user.name}!</pre>
        <img src={user.imageUrl} alt='profile' />
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
