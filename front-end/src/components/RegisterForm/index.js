import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';
import axios from 'axios';
function RegisterForm() {
  const passwordConfirmationInput = useRef(null);
  axios.defaults.withCredentials = true;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [alert, setAlert] = useState('');
  const redirect = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setAlert('Passwords must match');
      setTimeout(() => setAlert(''), 2000);
    } else {
      const user = {
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      };

      try {
        const response = await axios.post(
          'http://localhost:4000/api/users',
          user
        );
        console.log(response);
        if (response.status === 201) {
          redirect('/login');
        }
      } catch (e) {
        setAlert(e.response.data.message);
        setTimeout(() => setAlert(''), 2000);
      }
    }
  }

  return (
    <>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="login-title">REGISTER</div>
        <input
          placeholder="email"
          type="email"
          className="login-form-input"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className="login-form-input"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          ref={passwordConfirmationInput}
          placeholder="password confirmation"
          type="password"
          className="login-form-input"
          value={passwordConfirmation}
          required
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        {alert != '' ? <div className="alert">{alert}</div> : null}

        <button type="submit" className="add-button">
          Create Account
        </button>
        <div className="register-inv">
          Already have an account?
          <Link to="/login"> Login</Link>
        </div>
      </form>
    </>
  );
}
export default RegisterForm;
