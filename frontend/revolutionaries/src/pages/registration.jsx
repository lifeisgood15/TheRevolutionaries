import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import ProfileForm from "../components/ProfileForm";

function Registration() {
  const navigate = useNavigate();
  const [gLogin, setGLogin] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const onSuccessGoogleLogin = (credentialResponse) => {
    console.log("cred response", jwtDecode(credentialResponse.credential));
    setGLogin(jwtDecode(credentialResponse.credential));
    setDisplayForm(true);
  };
  const onErrorGoogleLogin = () => {
    console.error("Google login failed");
    setGLogin(false);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card p-1 m-5 border-light">
          <div className="card-body">
            <h5 className="card-title">
              Register using your IIM L email (students, alumnus)
            </h5>
            <div className="card-text">
              {!gLogin && (
                <GoogleLogin
                  onSuccess={onSuccessGoogleLogin}
                  onError={onErrorGoogleLogin}
                  size="large"
                  theme="outline"
                  text="continue_with"
                  shape="pill"
                  width={400}
                />
              )}
              {gLogin && displayForm && (
                <ProfileForm
                  nameInput={gLogin.given_name + " " + gLogin.family_name}
                  emailInput={gLogin.email}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Registration;
