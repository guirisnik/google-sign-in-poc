const useLoginCallback = () => {
  function onSuccess(googleLoginData) {
    localStorage.setItem('loginData', JSON.stringify(googleLoginData))
  }

  function onFailure(res) {
    console.info('Login failed: ', res)
  }

  return { onSuccess, onFailure }
}

export { useLoginCallback }
