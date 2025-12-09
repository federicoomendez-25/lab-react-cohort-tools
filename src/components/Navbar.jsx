import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/logo.png"
            alt="Ironhack Logo"
            className="logo"
          />
        </Link>
        <span className="title">Cohort Tools</span>
      </div>

      <div className="navbar-right">
        <Link to="/profile">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile.png"
            alt="User Profile"
            className="profile-icon"
          />
        </Link>
      </div>
    </nav>
  );
}
