import { Link } from 'react-router-dom';
import './styles.css';
function Footer() {
  return (
    <div class="footer-container">
      <div class="footer-element">
        <Link to="/">
          <span class="material-icons md-36">home</span>
        </Link>
      </div>
      <div class="footer-element">
        <Link to="/edit">
          <span class="material-icons md-36">view_agenda</span>
        </Link>
      </div>
      <div class="footer-element">
        <Link to="/addTransaction">
          <span class="material-icons md-36">add</span>
        </Link>
      </div>
      <div class="footer-element">
        <Link to="/visualizeData">
          <span class="material-icons md-36">pie_chart</span>
        </Link>
      </div>
      <div class="footer-element">
        <Link to="/myProfile">
          <span class="material-icons md-36">manage_accounts</span>
        </Link>
      </div>
    </div>
  );
}
export default Footer;
