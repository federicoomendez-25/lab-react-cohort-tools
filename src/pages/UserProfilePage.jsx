// src/pages/UserProfilePage.jsx
import { Link } from "react-router-dom";

export default function UserProfilePage() {
  return (
    <div className="page profile">
      <Link to="/">
        <button>⬅ Back</button>
      </Link>

      <h1>User Profile Page</h1>
    </div>
  );
}
