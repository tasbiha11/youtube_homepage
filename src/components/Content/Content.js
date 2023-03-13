import React from 'react';
import './Content.css';
import { MdWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { FiMoreVertical } from 'react-icons/fi';

import Data from '../../data.json';

import travel from '../../assets/video/travel.mp4';
import space from '../../assets/video/space.mp4';
import nature from '../../assets/video/nature.mp4';

const Content = () => {
    return (
        <div className='video-card '>
            {
                Data && Data.map(data => {
                    return (
                        <div className='row g-5 mt-3'>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <iframe
                                    width="300px"
                                    height="150px"
                                    src={travel}
                                    title="Youtube Player"
                                    frameborder="0"
                                    allowFullScreen
                                />
                                <div className='info'>
                                    <p>{data.channelName}</p>
                                    <MdWatchLater />
                                    <MdPlaylistAdd />
                                    <FiMoreVertical />
                                </div>
                                <small>{data.duration}</small>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <iframe
                                    width="300px"
                                    height="150px"
                                    src={space}
                                    title="Youtube Player"
                                    frameborder="0"
                                    allowFullScreen
                                />
                                <div className='info'>
                                    <p>{data.channelName}</p>
                                    <MdWatchLater />
                                    <MdPlaylistAdd />
                                    <FiMoreVertical />
                                </div>
                                <small>{data.duration}</small>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <iframe
                                    width="300px"
                                    height="150px"
                                    src={nature}
                                    title="Youtube Player"
                                    frameborder="0"
                                    allowFullScreen
                                />
                                <div className='info'>
                                    <p>{data.channelName}</p>
                                    <MdWatchLater />
                                    <MdPlaylistAdd />
                                    <FiMoreVertical />
                                </div>
                                <small>{data.duration}</small>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Content