import React from 'react'
import './homeLayout.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import {BsTwitter,BsHash,BsBookmark} from 'react-icons/bs'
import {AiTwotoneHome,AiOutlineMail} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {CiViewList,CiCircleMore} from 'react-icons/ci'
import {FaTwitterSquare} from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'
import {FiMoreHorizontal} from 'react-icons/fi'

const HomeLayout = () => {
    return (
        <section id="home-layout">
            <LeftSide />
            <div className='center-container'>
                <div className='topOfCenter'>
                    <h1>Home</h1>
                    <div className='top-btn-container'>
                        <div><h5>For You</h5></div>
                        <div><h5>Following</h5></div>
                        </div>
                        </div>
                    </div>
                   
                 <RightSide />
               </section>
                )
}

                export default HomeLayout
