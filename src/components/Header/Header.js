import React from 'react';
import { AiOutlineMenu, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='top'>
            <div className='top-left'>
                <AiOutlineMenu />
                <img className='yt-logo' src={logo} alt="logo" />
            </div>
            <div className='top-search'>
                <div className='top-middle'>
                    <input className='search-box' type="text" placeholder='Search' />
                    <BsSearch className='search-icon' />
                </div>
                <FaMicrophone className='icons' />
            </div>
            <div className='top-right'>
                <AiOutlineVideoCameraAdd className='icons' />
                <IoMdNotificationsOutline className='icons' />
                <RxAvatar className='icons' />
            </div>
        </div>
    )
}

export default Header