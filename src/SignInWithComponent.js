import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { useLoginCallback } from './loginCallback.hook'

const SignInWithComponent = () => {
  const { onFailure, onSuccess } = useLoginCallback()

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onFailure={onFailure}
      onSuccess={onSuccess}
      redirectUri='http://localhost:4200/home'
      uxMode='redirect'
    />
  )
}

export default SignInWithComponent
