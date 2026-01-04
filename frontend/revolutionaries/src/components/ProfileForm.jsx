import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../commonJS/auth";
import PhoneInput from "react-phone-number-input";
function ProfileForm({
  nameInput,
  emailInput,
  rollNoInput,
  phoneInput,
  programInput,
}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [validationErrors, setValidationErrors] = useState({
    emailInput: false,
    nameInput: false,
    rollNoInput: false,
    phoneInput: false,
  });

  useEffect(() => {
    setFormData({
      nameInput,
      emailInput,
      rollNoInput,
      phoneInput,
      programInput,
    });
  }, [nameInput]);
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    if (e.target.name === "nameInput") {
      setValidationErrors((prev) => {
        return { ...prev, nameInput: !validateName(e.target.value) };
      });
    } else if (e.target.name === "passwordInput") {
      setValidationErrors((prev) => {
        return { ...prev, passwordInput: !validatePassword(e.target.value) };
      });
    } else if (e.target.name === "emailInput") {
      setValidationErrors((prev) => {
        return { ...prev, emailInput: !validateEmail(e.target.value) };
      });
    }
    console.log(formData);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !formData.nameInput ||
      !formData.emailInput ||
      !formData.passwordInput
    ) {
      setValidationErrors({
        emailInput: !validateEmail(formData.emailInput),
        nameInput: !validateName(formData.nameInput),
        passwordInput: !validatePassword(formData.passwordInput),
      });
    } else if (
      !validationErrors.emailInput &&
      !validationErrors.nameInput &&
      !validationErrors.passwordInput
    ) {
      const payload = {
        name: formData.nameInput,
        email: formData.emailInput,
        password: formData.passwordInput,
      };
      const response = await fetch("http://localhost:8000/user/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.error) {
        alert(responseData.error);
      } else {
        localStorage.setItem("user", JSON.stringify(responseData));
        navigate("/");
      }
    }
  };

  return (
    <>
      <form>
        <div className="form-group mx-5 my-2">
          <label htmlFor="nameInput">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="nameInput"
            placeholder="Siya A"
            value={formData.nameInput}
            onChange={handleChange}
          />
          {validationErrors.nameInput && (
            <div className="text-danger">Invalid name.</div>
          )}
        </div>
        <div className="form-group mx-5 my-2">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="emailInput"
            value={formData.emailInput}
            placeholder="name@example.com"
            onChange={handleChange}
            disabled
          />
          {validationErrors.emailInput && (
            <div className="text-danger">Invalid email.</div>
          )}
        </div>
        <div className="form-group mx-5 my-2">
          <label htmlFor="nameInput">Roll Number</label>
          <input
            type="text"
            className="form-control"
            id="rollNoInput"
            name="rollNoInput"
            value={formData.rollNoInput}
            placeholder="PGP123"
            onChange={handleChange}
          />
          {validationErrors.rollNoInput && (
            <div className="text-danger">Invalid roll number.</div>
          )}
        </div>
        <div className="form-group mx-5 my-2">
          <label htmlFor="nameInput">Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneInput"
            name="phoneInput"
            placeholder="+91 1234567890"
            value={formData.phoneInput}
            onChange={handleChange}
          />
          {validationErrors.phoneInput && (
            <div className="text-danger">Invalid Phone Number.</div>
          )}
        </div>
        <div className="form-group mx-5 my-2">
          <label htmlFor="programInput">Program</label>
          <br />
          <select
            class="form-select form-select-sm mb-3"
            name="programInput"
            onChange={handleChange}
            value={formData.programInput}
          >
            <option value="IPMX">IPMX</option>
            <option value="SM1">SM 1st Year</option>
            <option value="SM2">SM 2nd Year</option>
            <option value="WE1">WE 1st Year</option>
            <option value="WE2">WE 2nd Year</option>
            <option value="other">Other (graduated)</option>
          </select>
          {validationErrors.programInput && (
            <div className="text-danger">Invalid program.</div>
          )}
        </div>
        {/* <div className="form-group mx-5 y-5">
          <label htmlFor="passwordInput">
            Password (length 8, must contain a number and special character)
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            name="passwordInput"
            placeholder="********"
            onChange={handleChange}
          />
          {validationErrors.passwordInput && (
            <div className="text-danger">Invalid password.</div>
          )}
        </div> */}
        <button
          type="submit"
          className="btn btn-primary submit-button my-2 mx-5"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </>
  );
}
export default ProfileForm;
