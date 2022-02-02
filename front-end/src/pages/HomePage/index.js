import NavBar from '../../components/NavBar';

import './styles.css';

function HomePage() {
  return (
    <div className="homePage">
      <div className="header-container">
        <div className="user-greet">Hi Susana</div>
        <div className="page-title">DASHBOARD</div>
      </div>
      <div className="month-summary-container">
        <div className="month-summary-title">This month</div>
        <div className="month-summaryr-info-holder">
          <div className="month-report-card"></div>
          <div className="month-report-card"></div>
        </div>
      </div>
      <div className="month-summary-container">
        <div className="month-summary-title">This year </div>
        <div className="month-summaryr-info-holder">
          <div className="month-report-card"></div>
          <div className="month-report-card"></div>
        </div>
      </div>
      <div className="month-summary-container">
        <div className="month-summary-title">This year </div>
        <div className="month-summaryr-info-holder">
          <div className="month-report-card"></div>
          <div className="month-report-card"></div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
export default HomePage;
