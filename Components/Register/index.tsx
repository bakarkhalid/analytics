import React from "react";
import Tabs from "../Tabs";
import { TabPane } from "rc-tabs";
import SignUp from "../SignUp";
import Login from "../Login";

const Register = () => {
  return (
    <>
      <Tabs className="tabs-wrap">
        <TabPane className="register" tab="REGISTER" key="1">
          <SignUp />
        </TabPane>
        <TabPane className="login" tab="LOGIN" key="2">
          <Login />
        </TabPane>
      </Tabs>
    </>
  );
};

export default Register;
