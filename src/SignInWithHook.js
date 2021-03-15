import { useEffect } from 'react'
import { useGoogleLogin } from 'react-google-login'
import { useLoginCallback } from './loginCallback.hook'

function SignInWithHook() {
  const { onFailure, onSuccess } = useLoginCallback()

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    isSignedIn: true,
    redirectUri: 'http://localhost:4200/redirect',
    uxMode: 'redirect',
  })

  useEffect(() => signIn())

  return null
}

export default SignInWithHook
