import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./page/Homepage";
import Layout from "./layout";
import Login from "./page/Login";
import Register from "./page/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyCode from "./page/VerifyCode";
import AuthLayout from "./layout/AuthLayout";
import Dashboard from "./page/Dashboard";
import NotFound from "./page/NotFound";
import Settings from "./page/Settings";
import Deposit from "./page/Deposit";
import Invest from "./page/Invest";
import Investments from "./page/Investments";
import Withdraw from "./page/Withdraw";
import Transfer from "./page/Transfer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";
import axiosRequest from "./axiosConfig";
// import Modal from "./components/Modal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Homepage />,
        index: true,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "verifyCode",
        element: <VerifyCode />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AuthLayout />,
    children: [
      {
        element: <Dashboard />,
        index: true,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "balance",
        element: <Settings />,
      },
      {
        path: "profile",
        element: <Settings />,
      },
      {
        path: "referral",
        element: <Settings />,
      },
      {
        path: "deposit",
        element: <Deposit />,
      },
      {
        path: "invest",
        element: <Invest />,
      },
      {
        path: "investments",
        element: <Investments />,
      },
      {
        path: "withdraw",
        element: <Withdraw />,
      },
      {
        path: "transfer",
        element: <Transfer />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const Itoken = localStorage.getItem("IToken");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getAccounts = async () => {
  //     try {
  //       const { data } = await axiosRequest.get("/user-account");
  //       dispatch(setUserAccount(data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (Itoken) {
  //     getAccounts();
  //   }
  // }, [dispatch, Itoken]);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const { data: userData } = await axiosRequest.get("/auth/user-fetch");
        dispatch(setUser(userData));
        setLoading(false);
      } catch (error) {
        // if (error?.response?.status === 300) {
        //   // toast.error("Could not fetch user");
        //   localStorage.removeItem('IToken')
        //   window.location.href = '/login'
        // }
        setLoading(false);
        console.log(error);
      }
    };
    if (Itoken) {
      getUser();
    }
  }, [dispatch, Itoken]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 45,
          height: "100vh",
          opacity: 0.2,
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
