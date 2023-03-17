import React, { useEffect, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DashboardHeader from "../components/DashboardHeader";
import { setUserAccount } from "../redux/userSlice";
import axiosRequest from "../axiosConfig";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, userAccount } = useSelector((state) => state.user);
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    const getUserAccount = async () => {
      try {
        const { data } = await axiosRequest.get("/user-account");
        dispatch(setUserAccount(data));
      } catch (error) {
        // if (error?.response?.status === 300) {
        //   // toast.error("Could not fetch user");
        //   localStorage.removeItem('IToken')
        //   window.location.href = '/login'
        // }
        console.log(error);
      }
    };
    if(!userAccount){
      getUserAccount();
    }
  }, [dispatch, userAccount]);

  useEffect(() => {
    if (
      !user?.etherumAddress ||
      !user?.bitcoinAddress ||
      !user?.litecoinAddress ||
      !user?.dogecoinaddress
    ) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [user]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const modalChild = () => (
    <>
      <p className="modal-p1">
        Dear <span>{user?.username}</span>
      </p>
      <p className="modal-p2">
        <span>Note</span>, Please all Deposits should be made directly to the
        company Wallet Address (That is system generated wallet). The Company
        will not be held Responsible if any payment is made outside the system
        generated Wallet.
      </p>
      <p>
        Are you yet to add your withdrawal wallet address? please click here to
        add wallet address for your account.
      </p>
      <p>Thank you for your cooperation</p>
    </>
  );

  const extraButton = () => {
    return (
      <Link className="link" to="settings">
        <button>Add to wallet</button>
      </Link>
    );
  };

  return (
    <div className="dashboard">
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
        title="Important Notification"
        extraButton={extraButton}
      >
        {modalChild()}
      </Modal>
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <main>
        <div className="wrapper">
          <DashboardHeader setShowSidebar={setShowSidebar} />
          <div className="dashboard-accounts">
            <div className="dashboard-account">
              <div className="dashboard-account-wrapper">
                <div className="dsh-acc1">$</div>
                <div className="dsh-acc2">
                  <p>Total Deposit</p>
                  <h5>{userAccount?.depRex}</h5>
                </div>
              </div>
            </div>
            <div className="dashboard-account">
              <div className="dashboard-account-wrapper">
                <div className="dsh-acc1">$</div>
                <div className="dsh-acc2">
                  <p>Total Investment</p>
                  <h5>${userAccount?.invRex}</h5>
                </div>
              </div>
            </div>
            <div className="dashboard-account">
              <div className="dashboard-account-wrapper">
                <div className="dsh-acc1">$</div>
                <div className="dsh-acc2">
                  <p>Total Withdrawal</p>
                  <h5> $ {userAccount?.witRex}</h5>
                </div>
              </div>
            </div>
            <div className="dashboard-account">
              <div className="dashboard-account-wrapper">
                <div className="dsh-acc1">$</div>
                <div className="dsh-acc2">
                  <p>Active Investment</p>
                  <h5>0</h5>
                </div>
              </div>
            </div>
            <div className="dashboard-account">
              <div className="dashboard-account-wrapper">
                <div className="dsh-acc1">$</div>
                <div className="dsh-acc2">
                  <p>Basic Investment</p>
                  <h5>0</h5>
                </div>
              </div>
            </div>
            <div className="dashboard-account">
              <div className="dashboard-account-wrapper">
                <div className="dsh-acc1">$</div>
                <div className="dsh-acc2">
                  <p>Standard Investment</p>
                  <h5>0</h5>
                </div>
              </div>
            </div>
            <div className="dashboard-account">
              <div className="dashboard-account-wrapper">
                <div className="dsh-acc1">$</div>
                <div className="dsh-acc2">
                  <p>Advance Investment</p>
                  <h5>0</h5>
                </div>
              </div>
            </div>
            <div className="dashboard-account">
              <div className="dashboard-account-wrapper">
                <div className="dsh-acc1">$</div>
                <div className="dsh-acc2">
                  <p>Premuim Investment</p>
                  <h5>0</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="summary1">
            <div className="referral">
              <div className="first-content">
                <div className="heading">
                  <h6>Referral Link</h6>
                </div>
                <div className="first-content-details">
                  <p>Copy and share</p>
                  <input
                    disabled
                    type="text"
                    value={`https://global-uk.net/${user?.username}`}
                  />
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        `https://global-uk.net/promise/${user?.username}`
                      )
                    }
                    title="Copy link"
                  >
                    <AiOutlineSave /> Copy
                  </button>
                </div>
              </div>
              <div className="second-content">
                <div className="second-content-details">
                  <div className="first-content">
                    <MdOutlineAccountBalanceWallet size={32} color={"white"} />
                  </div>
                  <div className="second-content">
                    <p>Pending</p>
                    <h5>0</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="account-summary">
              <div className="heading">Account summary</div>
              <div className="account-summary-details">
                <div className="content">
                  <span>Name</span>
                  <span>Value</span>
                </div>
                <div className="content">
                  <span>Available Balance</span>
                  <span>$485</span>
                </div>
                <div className="content">
                  <span>Total Deposit</span>
                  <span>$45</span>
                </div>
                <div className="content">
                  <span>Total Withdrawals</span>
                  <span>$78</span>
                </div>
                <div className="content">
                  <span>Activated Referrals</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
