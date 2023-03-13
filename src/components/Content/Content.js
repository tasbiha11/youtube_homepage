import React from 'react';
import './Content.css';
import { MdWatchLater, MdPlaylistAdd } from 'react-icons/md';
import { FiMoreVertical } from 'react-icons/fi';

import Data from '../../data.json';

const Content = () => {
    return (
        <div className='video-card '>
            {
                Data && Data.map(data => {
                    return (
                        <div className='row g-5'>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <video controls width="80%">
                                    <source src="/video-example.webm" type="video/webm" />
                                    <source src="/video-example.mp4" type="video/mp4" />
                                    Sorry, your browser doesn't support videos.
                                </video>
                                <div className='info'>
                                    <p>{data.channelName}</p>
                                    <MdWatchLater />
                                    <MdPlaylistAdd />
                                    <FiMoreVertical />
                                </div>
                                <small>{data.duration}</small>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <video controls width="80%">
                                    <source src="/video-example.webm" type="video/webm" />
                                    <source src="/video-example.mp4" type="video/mp4" />
                                    Sorry, your browser doesn't support videos.
                                </video>
                                <div className='info'>
                                    <p>{data.channelName}</p>
                                    <MdWatchLater />
                                    <MdPlaylistAdd />
                                    <FiMoreVertical />
                                </div>
                                <small>{data.duration}</small>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <video controls width="80%">
                                    <source src="/video-example.webm" type="video/webm" />
                                    <source src="/video-example.mp4" type="video/mp4" />
                                    Sorry, your browser doesn't support videos.
                                </video>
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