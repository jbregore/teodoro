import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Login.css";
import logo from "../../assets/images/logo.png";

import { Box, Card, TextField, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/faculty";
import Alert from "../Modals/Alert";
import Loading from "../Modals/Loading";

const Login = () => {
  const { isLoading, alertMessage, alert } = useSelector(
    (state) => state.faculty
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      return;
    }
    const isRedirect = await dispatch(login(formData, navigate));
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (isRedirect) {
      if (profile.id > 2) {
        navigate("/forms");
      } else {
        navigate("/masterlist");
      }
    } else {
      // navigate("/");
    }
  };

  return (
    <>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          {alert ? (
            <>
              <Alert title={alertMessage} />
            </>
          ) : (
            <></>
          )}
          <div className="background__wrapper ">
            <div className="login__wrapper ">
              {/* card */}
              <Card
                elevation={2}
                style={{ width: 400, textAlign: 'center', paddingRight: 40,
              paddingLeft: 40, }}
                className="section__padding login_card"
              >
                <img src={logo} style={{ width: 120, height: 120 }} alt="" />
                <Typography style={{fontSize: 22}}>
                  Teodoro Evangelista <br /> Memorial High School
                </Typography><br /><br /><br />
                {/* <div className="flex__center" >
                  <div className="app__wrapper section__padding">
                    <div
                      style={{
                        width: 200,
                        display: "flex",
                        justifyContent: "center",
                        marginRight: "2rem",
                      }}
                    >
                      <img
                        src={logo}
                        style={{ width: 150, height: 150 }}
                        alt=""
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <h2>
                        Teodoro Evangelista <br /> Memorial High School
                      </h2>
                    </div>
                  </div>
                </div> */}
                <TextField
                  id="outlined-username-input"
                  label="Username"
                  type="text"
                  autoComplete="current-username"
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  value={formData.username}
                  // style={{backgroundColor: '#fff'}}
                />
                <br />
                <br />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  value={formData.password}
                  // style={{backgroundColor: '#fff'}}
                />
                <br /> <br />
                <div className="flex__center">
                  <Link to="/masterlist" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      style={{ paddingLeft: 30, paddingRight: 30 }}
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
