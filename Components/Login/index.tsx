import React from "react";
import Input from "../Input";
import Button from "../Button";
import { AddEye } from "@/icons";
import Link from "next/link";

const Login = () => {
  return (
    <div className="form">
      <form className="form-area">
        <div className="form-block">
          <Input
            name="Username or Email"
            type="text"
            placeholder="Type your username or email"
          />
          <div className="password">
            <Input
              name="Password"
              type="password"
              placeholder="password"
              affix={
                <div className="affix-icon">
                  <span className="icon-eye">
                    <AddEye />
                  </span>
                </div>
              }
            />
          </div>
          <Button text="Login" className="login-button" />
          <div className="registered-link">
            <p>
              Already registered? <Link href="#">Click here to login</Link>
            </p>
          </div>
          <div className="registered-link">
            <p>
              Forgot your password? <Link href="#">Click here to reset</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
