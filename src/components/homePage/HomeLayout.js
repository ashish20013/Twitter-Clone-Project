import React, { useState } from 'react'
import './homeLayout.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { BsChat } from 'react-icons/bs'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { MdIosShare } from 'react-icons/md'
import { data } from './ApiData'



const HomeLayout = () => {
    const [like, setLike] = useState(0)

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
                <div className='whats-happening-field'>
                    <div >
                        <img src='https://picsum.photos/536/354'/>
                       
                    </div>
                    <div className='whats-happening-control'> <button className='btn everone-btn'>Every One</button>
                    <div className='text-field'>
                        <textarea rows={1} placeholder="what's happening..."/>
                    </div>
                    <button className='reply-btn'>Every One Can Reply</button>
                    </div>
                </div>
                <div className='feed-container'>
                    <div className='feed-block'>

                        {data.map((items, index) => (
                            <>
                                <div className='account-caption'>
                                    <div className='user-img'>
                                        <img src={items.user_img} alt='user-img' />
                                    </div>
                                    <div className='post-body'>

                                        {data.map((item, index) => (
                                            <>
                                                <div className='caption'>
                                                    <h5>{item.name} <span style={{ color: "gray" }}>@{item.user_name}
                                                    </span> <small>June 01</small> </h5>
                                                    <p>{item.caption}</p>
                                                </div>
                                                <div className='post-img'>
                                                    <img src={item.img} alt='post-img' />
                                                </div>

                                                <div className='like-comment-btn'>
                                                    <span><BsChat /><small>113</small></span>
                                                    <span><AiOutlineRetweet /> <small>797</small></span>
                                                    <span> <AiOutlineHeart onClick={() =>{ setLike(like + 1) }} style={{ color: (like > 0) ? "red" : "none" }} /> <small>{like}</small></span>
                                                    <MdIosShare />
                                                </div>
                                            </>
                                        )
                                        )}
                                    </div>
                                </div>
                            </>
                        ))}
                        
                    </div>
                </div>

            </div>


            <RightSide />
        </section>
    )
}

export default HomeLayout
