import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axiosRequest from "../axiosConfig";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import { setUser } from "../redux/userSlice";

const initialState = {
  phoneNumber: "",
  country: "",
  btc: "",
  eth: "",
  currPassword: "",
  newPassword: "",
  litecoin: "",
  dogecoin: "",
}

const Settings = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const {
    eth,
    btc,
    country,
    phoneNumber,
    currPassword,
    newPassword,
    litecoin,
    dogecoin,
  } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if((newPassword && !currPassword) || (currPassword && !newPassword)) return toast.error('Provide previous and new passwords')
    let avail = false
    const arr = Object.values(data)
    arr.forEach(el=>{
      if(el!==''){
        avail = true
      }
    })
    try {
      if(!avail) return
      setLoading(true)
      const res = await axiosRequest.put(`/user/${user._id}`, data);
      dispatch(setUser(res.data))
      setLoading(false)
      setData(initialState)
      toast.success('User Updated')
    } catch (error) {
      console.log(error);
      // toast.error(error?.response.data);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <main>
        <div className="wrapper">
          <DashboardHeader setShowSidebar={setShowSidebar} />
          <div className="account-settings">
            <h4>General Settings</h4>
            <div className="account-setting">
              Phone
              <input
                type="text"
                name="phoneNumber"
                onChange={handleChange}
                value={phoneNumber}
                placeholder={user?.phoneNumber ? user?.phoneNumber : 'Enter Phone number'}
              />
            </div>
            <div className="account-setting">
              Country
              <input
                onChange={handleChange}
                name="country"
                value={country}
                type="text"
                placeholder={user?.country ? user?.country : 'Enter Country'}
              />
            </div>
            <div className="account-setting">
              Btc Address
              <input
                name="btc"
                onChange={handleChange}
                value={btc}
                type="text"
                placeholder={user?.bitcoinAddress ? user?.bitcoinAddress : 'Enter Bitcoin address'}
              />
            </div>
            <div className="account-setting">
              Etc Address
              <input
                onChange={handleChange}
                value={eth}
                name="eth"
                type="text"
                placeholder={user?.etherumAddress ? user?.etherumAddress : 'Enter Etherum address'}

              />
            </div>
            <div className="account-setting">
              lite Address
              <input
                onChange={handleChange}
                value={litecoin}
                name="litecoin"
                type="text"
                placeholder={user?.litecoinAddress ? user?.litecoinAddress : 'Enter Litecoin address'}
              />
            </div>
            <div className="account-setting">
              Dogecoin Address
              <input
                onChange={handleChange}
                value={dogecoin}
                name="dogecoin"
                type="text"
                placeholder={user?.dogecoinaddress ? user?.dogecoinaddress : 'Enter dogecoin address'}
              />
            </div>
            <div className="account-setting">
              Current Password
              <input
                onChange={handleChange}
                value={currPassword}
                name="currPassword"
                type="text"
                placeholder="Enter Current Password"
              />
            </div>
            <div className="account-setting">
              New Password
              <input
                onChange={handleChange}
                value={newPassword}
                name="newPassword"
                type="text"
                placeholder="New Password"
              />
            </div>
            <div className="account-setting btn">
              <button onClick={handleSubmit}>{loading ? 'Updating' : 'Update'}</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
