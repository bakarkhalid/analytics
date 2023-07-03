import React from "react";
import Input from "../Input";
import Button from "../Button";
import { AddEye } from "@/icons";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="form">
      <form className="form-area">
        <div className="form-block">
          <Input name="Username" type="text" placeholder="Username" />
          <Input name="Email" type="email" placeholder="Email" />
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
          <div className="password">
            <Input
              name="Confirm Password"
              type="password"
              placeholder="Confirm your password"
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
        </div>
      </form>
    </div>
  );
};

export default SignUp;
