import React, { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";

const Transfer = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="dashboard">
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <main>
        <div className="wrapper">
          <DashboardHeader setShowSidebar={setShowSidebar} />
          <div className="deposit">
            <div className="deposit-left">
              <div className="deposit-left-heading">Transfer/Share Fund</div>
              <div className="deposit-left-content">
                <p>Enter amount to transfer</p>
                <div className="input-fund">
                  <div className="dollar-emb">
                    <BsCurrencyDollar />
                  </div>
                  <input type="text" />
                </div>
                <p>Enter email of receiver</p>
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
              <div className="deposit-right-heading">Pending Deposit Log</div>
              <table className="deposit-right-table">
                <thead>
                  <tr className="deposit-right-table-row">
                    <th>#</th>
                    <th>sender</th>
                    <th>receiver</th>
                    <th>amount</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Transfer;
