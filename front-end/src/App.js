import { PrivateRoutes } from './routes';
import HomePage from './pages/HomePage';
import AddTransactionPage from './pages/AddTransactionPage';
import EditPage from './pages/EditPage';
import StatsPage from './pages/StatsPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/addTransaction" element={<AddTransactionPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/visualizeData" element={<StatsPage />} />
        <Route path="/myProfile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
