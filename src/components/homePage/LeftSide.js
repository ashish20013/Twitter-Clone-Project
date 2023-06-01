import React from 'react'
import './homeLayout.css'
import {BsTwitter,BsHash,BsBookmark} from 'react-icons/bs'
import {AiTwotoneHome,AiOutlineMail} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {CiViewList,CiCircleMore} from 'react-icons/ci'
import {FaTwitterSquare} from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'

const LeftSide = () => {
  return (
    <div className='left-container'>
                <div className='side-navbar'>
                
                    <div className='side-navbar-icon'><BsTwitter style={{color:"#0079FF"}} className="nav-icon"/></div>
                    <div className='side-navbar-icon'> <BsHash className="nav-icon" /><p>Explore</p></div>
                    <div className='side-navbar-icon'><AiTwotoneHome className="nav-icon" /><p>home</p></div>
                    <div className='side-navbar-icon'><IoMdNotificationsOutline className="nav-icon" /><p>Notification</p></div>
                    <div className='side-navbar-icon'> <AiOutlineMail className="nav-icon"/><p>Message</p></div>
                    <div className='side-navbar-icon'> <CiViewList className="nav-icon"/><p>List</p></div>
                    <div className='side-navbar-icon'> <BsBookmark className="nav-icon"/><p>Bookmarks</p></div>
                    <div className='side-navbar-icon'> <FaTwitterSquare className="nav-icon"/><p>Twitter Blue</p></div>
                    <div className='side-navbar-icon'> <ImProfile className="nav-icon"/><p>Profile</p></div>
                    <div className='side-navbar-icon'> <CiCircleMore className="nav-icon"/><p>More</p></div>

                </div>
                <button className='tweet-btn'>Tweet</button>
            </div>
  )
}

export default LeftSide
