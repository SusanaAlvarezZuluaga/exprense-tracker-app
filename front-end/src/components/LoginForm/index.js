import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';
import axios from 'axios';
function LoginForm() {
  axios.defaults.withCredentials = true;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');
  const redirect = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const credentials = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/login',
        credentials
      );
      if (response.status === 200) {
        redirect('/');
      }
    } catch (e) {
      setAlert(e.response.data.message);
      setTimeout(() => setAlert(''), 2000);
    }

    //redirect('/edit');
  }
  return (
    <>
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="login-title">LOGIN</div>
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
        {alert != '' ? <div className="alert">{alert}</div> : null}
        <button type="submit" className="add-button">
          enter
        </button>
        <div className="register-inv">
          Don't Have an account?
          <Link to="/register"> Register</Link>
        </div>
      </form>
    </>
  );
}
export default LoginForm;
