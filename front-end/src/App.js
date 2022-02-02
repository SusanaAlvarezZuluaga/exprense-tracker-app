import HomePage from './pages/HomePage';
import AddTransactionPage from './pages/AddTransactionPage';
import EditPage from './pages/EditPage';
import StatsPage from './pages/StatsPage';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addTransaction" element={<AddTransactionPage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/visualizeData" element={<StatsPage />} />
      <Route path="/myProfile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
