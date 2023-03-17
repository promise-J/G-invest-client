import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

// axios.defaults.baseURL = 'https://g-invest.onrender.com/api'
axios.defaults.baseURL = 'http://localhost:5000/api'
// axios.interceptors.request.use(
//   config=>{
//     const token = localStorage.getItem('IToken')
//     if(token){
//       console.log('token is here')
//       config.headers['Authorization'] = token
//     }
//     return config
//   },
//   error=> {
//     return Promise.reject(error)
//   }
// )

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
