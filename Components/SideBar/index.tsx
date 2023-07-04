import React, { useEffect, useState } from 'react';
import { UploadIcon, SearchIcon, AnalyticsIcon } from "@/icons";
import Link from 'next/link';
import { useRouter } from 'next/router';


interface ISideBar {
    sideBarName: string,
    uploadFile: string,
    searchArea: string,
    analyticsArea: string,
}


const SideBar: React.FC<ISideBar> = ({ sideBarName, uploadFile, searchArea, analyticsArea }) => {

    const router = useRouter()

    const [activeMenu, setActiveMenu] = useState('');

    useEffect(() => {
        setActiveMenu(router.pathname)
    }, [])

    const handleMenuClick = (menuIndex: any) => {
        setActiveMenu(menuIndex);
    };

    return (
        <div className='side-bar'>
            <div className='side-bar-heading'>
                <h2>{sideBarName}</h2>
            </div>

            <ul className='side-bar-menu'>
                <li className={activeMenu === "/upload" ? 'active' : ''} onClick={() => handleMenuClick(1)}><Link href="/upload"> <UploadIcon />  {uploadFile}</Link></li>
                <li className={activeMenu === "/search" ? 'active' : ''} onClick={() => handleMenuClick(2)}><Link href="/search"><SearchIcon /> {searchArea}</Link></li>
                <li className={activeMenu === "/analytics" ? 'active' : ''} onClick={() => handleMenuClick(3)}><Link href="/analytics"> <AnalyticsIcon /> {analyticsArea}</Link></li>
            </ul>
        </div>
    )
}

export default SideBar;