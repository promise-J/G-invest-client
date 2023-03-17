import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosRequest from "../axiosConfig";
import DashboardHeader from "../components/DashboardHeader";
import Investment from "../components/Investment";
import Sidebar from "../components/Sidebar";

const Investments = () => {
  const [investmests, setInvestments] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    try {
      const getInvestments = async () => {
        const { data } = await axiosRequest.get("/invest");
        setInvestments(data);
      };
      getInvestments();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="dashboard">
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <main>
        <div className="wrapper">
          <DashboardHeader setShowSidebar={setShowSidebar} />
          <div className="investments">
            <div className="investment-heading">Investment Logs (active 0)</div>
            <table className="deposit-right-table">
              <thead>
                <tr className="deposit-right-table-row">
                  <th>#</th>
                  <th>Amount</th>
                  <th>Profit</th>
                  <th>Investment</th>
                  <th className="span2">Start date</th>
                  <th className="span2">End date</th>
                  <th>Status</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {investmests.map((el) => (
                  <Investment key={el._id} el={el} />
                ))}
              </tbody>
            </table>
            <p>
              <Link className="link" to="/dashboard/invest">
                No investment, Invest now
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Investments;
