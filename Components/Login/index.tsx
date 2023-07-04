import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { AddEye } from "@/icons";
import Link from "next/link";

const Login = () => {
  const [cred, setCred] = useState(
    {
      email: '',
      password: ''
    }
  );
  return (
    <div className="form">
      <form className="form-area">
        <div className="form-block">
          <Input
            name="Username or Email"
            type="text"
            placeholder="Type your username or email"
            value={cred.email}
            onChange={(e: any) => setCred({ ...cred, email: e.target.value })}
          />
          <div className="password">
            <Input
              value={cred.password}
              onChange={(e: any) => setCred({ ...cred, password: e.target.value })}
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
