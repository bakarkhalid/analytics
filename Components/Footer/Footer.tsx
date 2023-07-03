import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <p>Copyright © 2021 <Link href="#">Elite Link</Link>.</p>
      </div>
    </div>
  )
}

export default Footer