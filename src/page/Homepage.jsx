import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { investmentPlans } from "../data";
// bg01.jpg

const Homepage = () => {
  return (
    <div className="home">
      <div className="welcome">
        <h1>WELCOME TO</h1>
        <h2>UK GLOBALS</h2>
        <p>A total new way to grow your business</p>
        <Link to={'/register'}>
        <button style={{outline: 'none', border: 'none'}}>get started now</button>
        </Link>
      </div>
      <div className="plan">
        {investmentPlans.map((el) => (
          <div className="card" key={el.id}>
            <h2 style={{textTransform: 'uppercase'}}>{el.name}</h2>
            <p>
              When you are ready to grow, We will grow with you. Get a Standard
              plan
            </p>
            <h2>Minimum</h2>
            <h1>{el.min}</h1>
            <p>Maximum: {el.max}</p>
            <p>ROI: 8 to {el.interest}</p>
            <p>{el.duration}Hours Duration</p>
            <p>Instant Withdrawal</p>
            <p>Enhanced Security</p>
            <p>Access to all features</p>
            <p>24/7 Support</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
