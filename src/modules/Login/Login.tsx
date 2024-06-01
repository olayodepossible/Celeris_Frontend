import React, { useState } from 'react';
import styles from './Login.module.css';
import logo from '../../assets/logos/Logo.png';
import { CelerisPrimarySubmitBtn } from '../../shared/Button';
import { useNavigate } from 'react-router-dom';

interface IStateProps {
  email?: string;
  password?: string;
  rememberMe?: boolean;
  // setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  } as IStateProps);
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(login);
    navigate('/dashboard');
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginFormContainer}>
        <img src={logo} alt="Celeris" className="img-responsive" />
        <h2>Welcome Back!</h2>
        <p>Login into your account</p>
        <form onSubmit={onSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              placeholder="Your email address"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              placeholder="Your password"
            />
          </div>
          <div className="form-check form-switch mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Remember Me
            </label>
          </div>
          <CelerisPrimarySubmitBtn
            disabled={!login.email || !login.password}
            padding="11px 0"
            width="100%"
          >
            SIGN IN
          </CelerisPrimarySubmitBtn>
          <div className="w-100">
            <a href="#" className={styles.forgotPassword}>
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
