import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MasterList from "./components/MasterList/MasterList";
import Forms from "./components/Forms/Forms";
import SF1PDf from "./components/Forms/SF-1/SF1PDF";
import SF3PDf from "./components/Forms/SF-3/SF3PDF";
import SF9PDf from "./components/Forms/SF-9/SF9PDF";
import SF10PDf from "./components/Forms/SF-10/SF10PDF";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       {/* <App /> */}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="home" element={<Home />} />
//         <Route path="masterlist" element={<MasterList />} />
//         <Route path="forms" element={<Forms />} />
//         <Route path="sf1pdf" element={<SF1PDf />} />
//         <Route path="sf3pdf" element={<SF3PDf />} />
//         <Route path="sf9pdf" element={<SF9PDf />} />
//         <Route path="sf10pdf" element={<SF10PDf />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
