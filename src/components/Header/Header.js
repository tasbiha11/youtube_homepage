import React from 'react';
import { AiOutlineMenu, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { GrHomeRounded } from 'react-icons/gr';
import { SiYoutubemusic } from 'react-icons/si';
import { MdOutlineSubscriptions, MdOutlineWatchLater } from 'react-icons/md';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {


    return (
        <>
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

            <div className="side-menu">
                <div className="collapse-menu">
                    <div className="mini-menu">
                        <GrHomeRounded />
                        <p>Home</p>
                    </div>
                    <div className="mini-menu">
                        <SiYoutubemusic />
                        <p>Shorts</p>
                    </div>
                    <div className="mini-menu">
                        <MdOutlineSubscriptions />
                        <p>Subscription</p>
                    </div>
                    <div className="mini-menu">
                        <MdOutlineWatchLater />
                        <p>Watch Later</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header