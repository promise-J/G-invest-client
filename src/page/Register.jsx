import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  c_password: "",
  secretQuestion: "",
  secretAnswer: "",
  phoneNumber: "",
  country: "",
  referral: "",
  agreed: false,
};

const registerURL = "http://localhost:5000/api/auth/register";

const Register = () => {
  const [data, setData] = useState(initialState);
  // const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const {
    fullName,
    email,
    phoneNumber,
    password,
    c_password,
    secretAnswer,
    secretQuestion,
    username,
    country,
    referral,
    agreed,
  } = data;

  const fieldClear = () => {
    return (
      !fullName ||
      !username ||
      !email ||
      !password ||
      password !== c_password ||
      !agreed
    );
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post(registerURL, data);
      navigate("/verifyCode", {state: {email}});
    } catch (error) {
      console.log(error, "from register");
    }
  };

  const handleChange = (e) => {
    let { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleCheck = (e) => {
    let { name } = e.target;
    setData({ ...data, [name]: !agreed });
  };

  return (
    <div className="login">
      <div className="container">
        <h4>Create an account</h4>
        <label className="input-label" htmlFor="full name">
          Full Name
        </label>
        <input
          name="fullName"
          onChange={handleChange}
          value={fullName}
          type="text"
          placeholder="Full Name"
        />
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Email"
          value={email}
        />
        <div className="container-dual">
          <div>
            <label htmlFor="country">Country</label>
            <select
              name="country"
              onChange={handleChange}
              value={country}
              // defaultValue={"nigeria"}
              type="text"
            >
              <option value="">Select Country</option>
              <option value="nigeria">Nigeria</option>
              <option value="ghana">Ghana</option>
            </select>
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              onChange={handleChange}
              value={username}
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="container-dual">
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              name="phoneNumber"
              onChange={handleChange}
              value={phoneNumber}
              type="text"
              placeholder="Phone"
            />
          </div>
          <div>
            <label htmlFor="referral">Your referral</label>
            <input
              name="referral"
              onChange={handleChange}
              value={referral}
              type="text"
              placeholder="Your Referral"
            />
          </div>
        </div>
        <div className="container-dual">
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={handleChange}
              value={password}
              type="text"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="c_password">Password Confirmation</label>
            <input
              name="c_password"
              onChange={handleChange}
              value={c_password}
              type="text"
              placeholder="Confirm Your password"
            />
          </div>
        </div>
        <div className="container-dual">
          <div>
            <label htmlFor="secretQuestion">Secret Question</label>
            <input
              name="secretQuestion"
              onChange={handleChange}
              value={secretQuestion}
              type="text"
              placeholder="Secret Question"
            />
          </div>
          <div>
            <label htmlFor="secretAnswer">Secret Answer</label>
            <input
              name="secretAnswer"
              onChange={handleChange}
              value={secretAnswer}
              type="text"
              placeholder="Secret Answer"
            />
          </div>
        </div>
        <input
          name="agreed"
          onChange={handleCheck}
          checked={agreed}
          value={agreed}
          className="agree-terms"
          type="checkbox"
        />
        <label className="rem-label" htmlFor="remember">
          I Agree with terms and conditions
        </label>
        <button
          disabled={fieldClear()}
          onClick={handleSubmit}
          className="login-btn"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
