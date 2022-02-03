import LoginForm from '../../components/LoginForm';
import './styles.css';

function LoginPage() {
  return (
    <div className="loginPage">
      <div className="login-page-title">Welcome Back</div>
      <LoginForm />
    </div>
  );
}
export default LoginPage;
