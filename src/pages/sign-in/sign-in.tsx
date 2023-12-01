import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {FormEvent, ReactElement, useRef, useState} from 'react';
import {loginAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {isLoginValid, isPasswordValid} from '../../helpers/validate-credentials';
import {setErrorMessage} from '../../store/action';

function SignIn(): ReactElement {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const errorMessage = useAppSelector((state) => state.errorMessage);
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isLoginValid(loginRef.current) && isPasswordValid(passwordRef.current)) {
      dispatch(loginAction({
        login: loginRef.current?.value,
        password: passwordRef.current?.value
      }));
      setLoginError(false);
      setPasswordError(false);
      dispatch(setErrorMessage(undefined));
    } else if (!isLoginValid(loginRef.current)) {
      setLoginError(true);
      setPasswordError(false);
      dispatch(setErrorMessage(undefined));
    } else {
      setLoginError(false);
      setPasswordError(true);
      dispatch(setErrorMessage(undefined));
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {
            loginError &&
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>
          }

          {
            passwordError &&
            <div className="sign-in__message">
              <p>Please enter a valid password</p>
            </div>
          }

          {
            errorMessage &&
            <div className="sign-in__message">
              <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
            </div>
          }

          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
