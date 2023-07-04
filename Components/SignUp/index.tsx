import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { AddEye } from "@/icons";
import Link from "next/link";

const SignUp = () => {
  const [cred, setCred] = useState({
    username: '',
    email: '',
    password: '',
    confrimPassword: ''
  })
  return (
    <div className="form">
      <form className="form-area">
        <div className="form-block">
          <Input value={cred.username} onChange={(e) => setCred({ ...cred, username: e.target.value })} name="Username" type="text" placeholder="Username" />
          <Input value={cred.email} onChange={(e) => setCred({ ...cred, email: e.target.value })} name="Email" type="email" placeholder="Email" />
          <div className="password">
            <Input
              value={cred.password} onChange={(e) => setCred({ ...cred, password: e.target.value })}
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
              value={cred.confrimPassword} onChange={(e) => setCred({ ...cred, confrimPassword: e.target.value })}
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
