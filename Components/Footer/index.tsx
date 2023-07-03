import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <p>Copyright © 2021 <Link href="#">Elite Link</Link>.</p>
        </div>
    </div>
  )
}

export default Footer;