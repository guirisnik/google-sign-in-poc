import { useEffect } from 'react'
import { useGoogleLogin } from 'react-google-login'

function SignIn() {
  async function onSuccess(googleLoginData) {
    console.info(googleLoginData)

    const res = await fetch('http://localhost:8080/api/v1/auth/google', {
      method: 'POST',
      body: JSON.stringify({
        token: googleLoginData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    localStorage.setItem('user', JSON.stringify(data))
    // store returned user somehow
  }

  function onFailure(res) {
    console.info('Login failed: ', res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    isSignedIn: true,
    redirectUri: 'http://localhost:4200/home/',
    uxMode: 'redirect',
  })

  useEffect(() => signIn())

  return null
}

export default SignIn
