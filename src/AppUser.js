// import Nav from "./Components-TrangChu/Nav";
// import Slider from "./Components-TrangChu/Slider";
// import Content from "./Components-TrangChu/Content";
// import Content2 from "./Components-TrangChu/Content2";
// import Footer from "./Components-TrangChu/Footer";
import "./App.css";
import "./AppUser.css";
import React from "react";
import User from "./User";
import PatientProfile from "./PatientProfile";
import HomeUser from "./HomeUser";
import IntroUser from "./IntroUser";
import ProcedureUser from "./ProcedureUser";
import UsingInstructionsUser from "./UsingInstructionsUser";
import ContactUser from "./ContactUser";
import MedicalBill from "./MedicalBill";
import BookDoctor from "./BookDoctor";
import BookDate from "./BookDate";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import App from "./App";

function AppUser() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/HomeUser"
          render={(props) => {
            const tokenFake = localStorage.getItem("token");
            if (tokenFake) {
              function timeDelToken() {
                localStorage.removeItem("token");
              }
              // setTimeout(timeDelToken, 3000000);
              return <HomeUser {...props} />;
            } else {
              return (window.location.href = "./Login");
            }
          }}
        ></Route>

        <Route
          path="/IntroUser"
          render={(props) => {
            const tokenFake = localStorage.getItem("token");
            if (tokenFake) {
              function timeDelToken() {
                localStorage.removeItem("token");
              }
              // setTimeout(timeDelToken, 50000);
              return <IntroUser {...props} />;
            } else {
              return (window.location.href = "./Login");
            }
          }}
        ></Route>

        <Route
          path="/ProcedureUser"
          render={(props) => {
            const tokenFake = localStorage.getItem("token");
            if (tokenFake) {
              function timeDelToken() {
                localStorage.removeItem("token");
              }
              // setTimeout(timeDelToken, 30000);
              return <ProcedureUser {...props} />;
            } else {
              return (window.location.href = "./Login");
            }
          }}
        ></Route>

        <Route
          path="/UsingInstructionsUser"
          render={(props) => {
            const tokenFake = localStorage.getItem("token");
            if (tokenFake) {
              function timeDelToken() {
                localStorage.removeItem("token");
              }
              // setTimeout(timeDelToken, 30000);
              return <UsingInstructionsUser {...props} />;
            } else {
              return (window.location.href = "./Login");
            }
          }}
        ></Route>

        <Route
          path="/ContactUser"
          render={(props) => {
            const tokenFake = localStorage.getItem("token");
            if (tokenFake) {
              function timeDelToken() {
                localStorage.removeItem("token");
              }
              // setTimeout(timeDelToken, 30000);
              return <ContactUser {...props} />;
            } else {
              return (window.location.href = "./Login");
            }
          }}
        ></Route>

        <Route
          path="/PatientProfile"
          render={(props) => {
            const tokenFake = localStorage.getItem("token");
            if (tokenFake) {
              function timeDelToken() {
                localStorage.removeItem("token");
              }
              // setTimeout(timeDelToken, 30000);
              return <PatientProfile {...props} />;
            } else {
              return (window.location.href = "./Login");
            }
          }}
        ></Route>

        <Route
          path="/MedicalBill"
          render={(props) => {
            const tokenFake = localStorage.getItem("token");
            if (tokenFake) {
              function timeDelToken() {
                localStorage.removeItem("token");
              }
              // setTimeout(timeDelToken, 30000);
              return <MedicalBill {...props} />;
            } else {
              return (window.location.href = "./Login");
            }
          }}
        ></Route>

        <Route
          path="/BookDoctor"
          render={(props) => {
            const tokenFake = localStorage.getItem("token");
            if (tokenFake) {
              function timeDelToken() {
                localStorage.removeItem("token");
              }
              // setTimeout(timeDelToken, 30000);
              return <BookDoctor {...props} />;
            } else {
              return (window.location.href = "./Login");
            }
          }}
        ></Route>

        <Route
          path="/BookDate"
          render={(props) => {
            const tokenFake = localStorage.getItem("token");
            if (tokenFake) {
              function timeDelToken() {
                localStorage.removeItem("token");
              }
              // setTimeout(timeDelToken, 30000);
              return <BookDate {...props} />;
            } else {
              return (window.location.href = "./Login");
            }
          }}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AppUser;
