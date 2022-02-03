import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function ProfilePage() {
  const redirect = useNavigate();
  axios.defaults.withCredentials = true;
  async function handleLogout() {
    const response = await axios.get('http://localhost:4000/api/auth/logout');
    console.log(response);
    if (response.status === 200) {
      redirect('/login');
    }
  }

  return (
    <div className="AddTransactionPage">
      <div className="header-container">
        <div className="page-title">PROFILE PAGE</div>
        <button onClick={() => handleLogout()} className="logout-button">
          logout
        </button>
      </div>
    </div>
  );
}
export default ProfilePage;
