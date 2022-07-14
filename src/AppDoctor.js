import React from "react";
import HomeDoctor from "./HomeDoctor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function AppDoctor() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/HomeDoctor"
          render={(props) => {
            const getTokenLoginDoctor = localStorage.getItem("token");
            if (getTokenLoginDoctor) {
              function deleteToken() {
                localStorage.removeItem("token");
              }
              setTimeout(deleteToken, 30000);
              return <HomeDoctor {...props} />;
            } else {
              return (window.location.href = "./Login");
            }
          }}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AppDoctor;
