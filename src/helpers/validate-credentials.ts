export function isLoginValid(loginRef: HTMLInputElement | null) {
  const filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return loginRef !== null && loginRef.value !== '' && loginRef.value.search(filter) !== -1;
}

export function isPasswordValid(passwordRef: HTMLInputElement | null) {
  return passwordRef !== null && passwordRef.value !== ''
    && passwordRef.value.match(/\d/) && passwordRef.value.match(/[a-zA-Z]/);
}
