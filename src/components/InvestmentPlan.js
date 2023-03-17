import axios from "axios";
import React, { useState } from "react";
import { GrCheckbox } from "react-icons/gr";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const InvestmentPlan = ({ el, setMessage, setIsOpen }) => {
  const { user } = useSelector((state) => state.user);

  const [amount, setAmount] = useState("");

  const handleInvest = async () => {
    try {
      if (!amount) return toast.error("Amount is not provided");
      if (amount > el.max) {
        setMessage(
          `Oppps! Looks like your amount $${amount} is too much. Please check the range of the plan`
        );
        setIsOpen(true);
        setAmount("");
      }
      if (amount < el.min) {
        setMessage(
          `Oppps! Looks like your amount $${amount} is too less. Please check the range of the plan`
        );
        setIsOpen(true);
        setAmount("");
      }
      if (amount > user?.balance) {
        setMessage(
          `Oppps! Looks like your hand nor reach $${amount} to invest`
        );
        setIsOpen(true);
        setAmount("");
      }
      await axios.post('/invest', {amount: +amount, planId: el.id})
      setMessage(
      `Congrats, your ${el.name} Investment was made successful.`
      );
      setIsOpen(true);
      setAmount("");

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="invest-plan">
      <div className="type">{el.name}</div>
      <h1 className="min-amount">${el.min}</h1>
      <p className="min-text">minimum</p>
      <div className="details">
        <div className="detail">
          <div className="detail-icon red">
            <GrCheckbox size={10} />
          </div>
          <span>Maximum: ${el.max}</span>
        </div>

        <div className="detail">
          <div className="detail-icon green">
            <GrCheckbox size={10} />
          </div>
          <span>ROI:4 to {el.interest}%</span>
        </div>
        <div className="detail">
          <div className="detail-icon green">
            <GrCheckbox size={10} />
          </div>
          <span>Duration: {el.duration} Hours</span>
        </div>
        <div className="detail">
          <div className="detail-icon green">
            <GrCheckbox size={10} />
          </div>
          <span>Instant Withdrawal</span>
        </div>
        <div className="detail">
          <div className="detail-icon red">
            <GrCheckbox size={10} />
          </div>
          <span>24/7 Support</span>
        </div>
      </div>
      <div className="invest-action">
        <p>Enter Investment amount</p>
        <input
          placeholder="Enter amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleInvest}>Invest</button>
      </div>
    </div>
  );
};

export default InvestmentPlan;
