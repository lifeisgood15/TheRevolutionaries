import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/registration";
import "./App.css";
import NavBar from "./components/NavBar";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = "SECRET";
function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
