import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { investmentPlans } from "../data";
import InvestmentPlan from "../components/InvestmentPlan";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

const Invest = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClose = ()=>{
    setIsOpen(false)
  }

  const modalChild = () => (
      <p style={{fontSize: 25}}>{message}</p>
  );
  
  const extraButton = () => {
    return (
      <Link className="link" to="/dashboard/investments">
        <button>See Investments</button>
      </Link>
    );
  };

  return (
    <div className="dashboard">
      <Modal
       isOpen={isOpen}
        handleClose={handleClose}
        title={'Investment Notification'}
        extraButton={extraButton}
      >
        {modalChild()}
      </Modal>

      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <main>
        <div className="wrapper">
          <DashboardHeader setShowSidebar={setShowSidebar} />
          <h1>Investment Plans</h1>
          <p>
            Select investment plans suitable for you. You can reinvest your
            profit here
          </p>
          <div className="invest-plans">
            {investmentPlans.map(el=>(
             <InvestmentPlan setIsOpen={setIsOpen} setMessage={setMessage} key={el.id} el={el}  />
            ))
            }
          </div>
        </div>
      </main>
    </div>
  );
};

export default Invest;
