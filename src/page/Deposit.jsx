import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import { decreaseCoinAmount, increaseCoinAmount } from "../redux/userSlice";
import moment from "moment";
import DashboardHeader from "../components/DashboardHeader";
import axiosRequest from "../axiosConfig";

const Deposit = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [amount, setAmount] = useState("");
  const [deposits, setDeposits] = useState([]);
  const [paymentType, selectPaymentType] = useState("bitcoin");
  const [paymentTypeAddress, setPaymentTypeAddress] = useState("");
  const [showSidebar, setShowSidebar] = useState(false)


  useEffect(() => {
    const getUserDeposit = async () => {
      try {
        const { data } = await axiosRequest.get("/deposit");
        setDeposits(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserDeposit();
  }, []);

  const deleteDeposit = async (id, txnAmount) => {
    try {
      const {data} = await axiosRequest.delete(`/deposit/${id}`)
      setDeposits(el=> el.filter(d=> d._id !== id))
      dispatch(decreaseCoinAmount({type: 'deposit', amount: txnAmount}))
      toast.success(data)
    } catch (error) {
      console.log(error)   
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setAmount("");
    selectPaymentType("");
  };

  const handleDeposit = async () => {
    if (!amount || !paymentType) return toast.error("Please complete fields");
    try {
      const res = await axiosRequest.post("/deposit", {
        amount: +amount,
        paymentType,
      });
      console.log(res, 'from deposit')
      setPaymentTypeAddress(res.data.paymentTypeAddress);
      setIsOpen(true);
      dispatch(increaseCoinAmount({ type: "deposit", amount }));
    } catch (error) {
      console.log(error, "from deposit");
    }
  };

  const modalChild = () => {
    return (
      <>
        <p>
          Send {amount} to this {paymentType} address
        </p>
        <input
          disabled
          style={{
            padding: "12px 20px",
            width: "100%",
            backgroundColor: copied ? "rgb(182, 182, 252)" : "white",
            fontSize: 16,
            borderRadius: 8,
          }}
          type="text"
          value={paymentTypeAddress}
        />
      </>
    );
  };

  const extraButton = () => {
    return (
      <button
        style={{ background: "purple" }}
        onClick={() => {
          navigator.clipboard.writeText(paymentTypeAddress);
          setCopied(true);
          toast.success("Copied");
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        Copy Address
      </button>
    );
  };

  return (
    <div className="dashboard">
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
        title="Deposit Notification"
        extraButton={extraButton}
      >
        {modalChild()}
      </Modal>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main>
        <div className="wrapper">
          <DashboardHeader setShowSidebar={setShowSidebar} />
          <div className="deposit">
            <div className="deposit-left">
              <div className="deposit-left-heading">Deposit Fund</div>
              <div className="deposit-left-content">
                <p>Enter amount to fund</p>
                <div className="input-fund">
                  <div className="dollar-emb">
                    <BsCurrencyDollar />
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <p>Payment Type</p>
                <select
                  onChange={(e) => selectPaymentType(e.target.value)}
                  value={paymentType}
                  name="payment"
                  id="payment"
                >
                  <option value="bitcoin">BTC</option>
                  <option value="ethereum">ETC</option>
                  <option value="litecoin">LITECOIN</option>
                  <option value="dogecoin">DOGECOIN</option>
                </select>
                <button onClick={handleDeposit}>
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
                  {deposits.map((el) => (
                    <tr key={el._id} className="deposit-right-table-row">
                      <td>#{el?._id.slice(0, 6)}</td>
                      <td>{el?.user?.username}</td>
                      <td>${el?.amount}</td>
                      <td>{el?.type}</td>
                      <td>{moment(el?.createdAt).format("YYYY-MM-DD")}</td>
                      <td>{el?.transactionId.slice(0, 7)}</td>
                      <td>{el?.status}</td>
                      <td>
                        <button onClick={()=> deleteDeposit(el._id, el.amount)}>Cancel</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Deposit;
