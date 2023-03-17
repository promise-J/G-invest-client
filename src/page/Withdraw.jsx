import React, { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";

const Withdraw = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="dashboard">
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <main>
        <div className="wrapper">
          <DashboardHeader setShowSidebar={setShowSidebar} />
          <div className="deposit">
            <div className="deposit-left">
              <div className="deposit-left-heading">Fund Withdrawal</div>
              <div className="deposit-left-content">
                <p>Enter amount to withdraw</p>
                <div className="input-fund">
                  <div className="dollar-emb">
                    <BsCurrencyDollar />
                  </div>
                  <input type="text" />
                </div>
                <p>Payment Type</p>
                <select name="payment" id="payment">
                  <option value="btc">BTC</option>
                  <option value="btc">ETC</option>
                  <option value="btc">USDT</option>
                  <option value="btc">TRON</option>
                  <option value="btc">BNB</option>
                </select>
                <button>
                  <BsCurrencyDollar /> Add Fund
                </button>
              </div>
            </div>
            <div className="deposit-right">
              <div className="deposit-right-heading">
                Pending Withdrawal Log
              </div>
              <table className="deposit-right-table">
                <thead>
                  <tr className="deposit-right-table-row">
                    <th>#</th>
                    <th>Username</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Pay.Ref</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                <tr className="deposit-right-table-row">
                  <td>#353jk3</td>
                  <td>Promise</td>
                  <td>$35</td>
                  <td>Invest</td>
                  <td>24.15.2023</td>
                  <td>3jr3ju3iufu</td>
                  <td>waiting</td>
                  <td>
                    <button>Cancel</button>
                  </td>
                </tr>
                <tr className="deposit-right-table-row">
                  <td>#353jk3</td>
                  <td>Promise</td>
                  <td>$35</td>
                  <td>Invest</td>
                  <td>24.15.2023</td>
                  <td>3jr3ju3iufu</td>
                  <td>waiting</td>
                  <td>
                    <button>Cancel</button>
                  </td>
                </tr>
                <tr className="deposit-right-table-row">
                  <td>#353jk3</td>
                  <td>Promise</td>
                  <td>$35</td>
                  <td>Invest</td>
                  <td>24.15.2023</td>
                  <td>3jr3ju3iufu</td>
                  <td>waiting</td>
                  <td>
                    <button>Cancel</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Withdraw;
