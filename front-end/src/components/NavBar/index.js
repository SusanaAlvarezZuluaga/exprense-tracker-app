import { Link } from 'react-router-dom';
import './styles.css';
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-element">
        <Link to="/">
          <span className="material-icons md-36">home</span>
        </Link>
      </div>
      <div className="footer-element">
        <Link to="/edit">
          <span className="material-icons md-36">view_agenda</span>
        </Link>
      </div>
      <div className="footer-element">
        <Link to="/addTransaction">
          <span className="material-icons md-36">add</span>
        </Link>
      </div>
      <div className="footer-element">
        <Link to="/visualizeData">
          <span className="material-icons md-36">pie_chart</span>
        </Link>
      </div>
      <div className="footer-element">
        <Link to="/myProfile">
          <span className="material-icons md-36">manage_accounts</span>
        </Link>
      </div>
    </div>
  );
}
export default Footer;
