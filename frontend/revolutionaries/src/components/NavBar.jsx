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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            className="navbar-brand btn btn-outline-light"
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <button
                  className="nav-link"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </button>
              </li>
            </ul>
            <div class="d-flex">
              <ul className="navbar-nav navbar-right">
                {user || true ? (
                  <>
                    <li className="nav-item me-2 logout-btn">
                      <button className="nav-link" onClick={logoutUser}>
                        Logout <span className="sr-only"></span>
                      </button>
                    </li>
                  </>
                ) : (
                  <li className="nav-item me-2">
                    <button className="nav-link" onClick={goToLogin}>
                      Login <span className="sr-only"></span>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
