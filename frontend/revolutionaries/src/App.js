import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/registration";
import "./App.css";
import NavBar from "./components/NavBar";
import SignIn from "./pages/signin";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID =
  "1016394680240-98kq7vttjc3478jcm38mpapfcm6s2n6a.apps.googleusercontent.com";
function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
