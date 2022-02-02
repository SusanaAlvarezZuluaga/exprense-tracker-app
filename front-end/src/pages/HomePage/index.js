import Footer from '../../components/Footer';

import './styles.css';

function HomePage() {
  return (
    <div class="homePage">
      <div class="header-container">
        <div class="user-greet">Hi Susana</div>
        <div class="page-title">DASHBOARD</div>
      </div>
      <div class="month-summary-container">
        <div class="month-summary-title">This month</div>
        <div class="month-summaryr-info-holder">
          <div class="month-report-card"></div>
          <div class="month-report-card"></div>
        </div>
      </div>
      <div class="month-summary-container">
        <div class="month-summary-title">This year </div>
        <div class="month-summaryr-info-holder">
          <div class="month-report-card"></div>
          <div class="month-report-card"></div>
        </div>
      </div>
      <div class="month-summary-container">
        <div class="month-summary-title">This year </div>
        <div class="month-summaryr-info-holder">
          <div class="month-report-card"></div>
          <div class="month-report-card"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
