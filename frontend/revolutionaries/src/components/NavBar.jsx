import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { googleLogout } from "@react-oauth/google";

function NavBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [searchIp, setSearchIp] = useState("");

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      setUser(true);
    } else {
      // navigate("/login");
    }
  }, [navigate]);

  const goToHome = () => {
    navigate("/");
  };

  const goToCreateNew = () => {
    navigate("/new");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const logoutUser = () => {
    googleLogout();
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-1">
        <button
          className="navbar-brand btn btn-outline-light hobbit-logo"
          onClick={goToHome}
        >
          Revolutionaries
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-right">
            {user || true ? (
              <>
                <li className="nav-item ml-5 logout-btn">
                  <button className="nav-link" onClick={logoutUser}>
                    Logout <span className="sr-only"></span>
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item ml-5">
                <button className="nav-link" onClick={goToLogin}>
                  Login <span className="sr-only"></span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
