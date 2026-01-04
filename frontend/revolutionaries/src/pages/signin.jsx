import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import ProfileForm from "../components/ProfileForm";

function SignIn() {
  const navigate = useNavigate();
  const [gLogin, setGLogin] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const onSuccessGoogleLogin = (credentialResponse) => {
    console.log("cred response", jwtDecode(credentialResponse.credential));
    setGLogin(jwtDecode(credentialResponse.credential));
    setDisplayForm(true);
    navigate("/");
  };
  const onErrorGoogleLogin = () => {
    console.error("Google login failed");
    setGLogin(false);
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="d-flex justify-content-center">
              <div className="card p-1 m-5 border-light">
                <div className="card-body">
                  <h5 className="card-title">
                    <h1 class="display-1">Revolutionaries</h1>
                    <br />
                    Continue using your IIM L email (students, alumnus)
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
          </div>
          <div class="col-sm">
            <h1 class="display-5">Book a mock interview.</h1>
            <br />
            <h1 class="display-5">Access resources in one place.</h1>
            <br />
            <h1 class="display-5">
              Prepare for interview with your dream company.
            </h1>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;
