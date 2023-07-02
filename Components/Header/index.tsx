import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import { InfoArrow, UserIcon } from "@/icons";

interface Iprops {
  isLogged?: boolean;
}

const Header: React.FC<Iprops> = ({ isLogged = false }) => {
  return (
    <div className="header">
      <div className="container">
        <strong className="logo">
          <Link href="#">
            <InfoArrow />
            <span className="logo-text">Elite Link</span>
          </Link>
        </strong>
        {isLogged && <Button text={<><UserIcon />@admin_username</>} />}
      </div>
    </div>
  );
};

export default Header;
