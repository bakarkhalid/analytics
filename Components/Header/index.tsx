import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import { InfoArrow, UserIcon,} from "@/icons";

interface Iprops {
  isLogged?: boolean;
  placeholder?: string;
  text?: string;
  image?: string;
}

const Header: React.FC<Iprops> = ({ isLogged = false, text, image, placeholder}) => {
  return (
    <div className="header">
      <div className="container">
        <strong className="logo">
          <Link href="#">
            <InfoArrow />
            <span className="logo-text">Elite Link</span>
          </Link>
        </strong>
        {isLogged && <Button text={<><UserIcon />@username</>} />}
      </div>
    </div>
  );
};

export default Header;
