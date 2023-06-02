import React from "react";
import "./homeLayout.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const RightSide = () => {
  return (
    <div className='right-container'>
    <div className='happing-container'>
        <h2>What’s happening</h2>
        <div className='content'>
            {/* <p>Trending in India</p><CiCircleMore className="nav-icon"/> */}
            <div className='happing-icon'><h6>Trending in India</h6> <FiMoreHorizontal className="happening-more-icon"/></div>
            <h5>#DelhiMuder</h5>
            <small>5,243 Tweets</small>
        </div>
        <div className='content'>
            {/* <p>Trending in India</p><FiMoreHorizontal className="happening-more-icon"/> */}
            <div className='happing-icon'><h6>Trending in India</h6> <FiMoreHorizontal className="happening-more-icon"/></div>
            <h5>#DelhiMuder</h5>
            <small>5,243 Tweets</small>
        </div>
        <div className='content'>
            {/* <p>Trending in India</p><FiMoreHorizontal className="happening-more-icon"/> */}
            <div className='happing-icon'><h6>Trending in India</h6> <FiMoreHorizontal className="happening-more-icon"/></div>
            <h5>#DelhiMuder</h5>
            <small>5,243 Tweets</small>
        </div>
        <div className='content'>
            {/* <p>Trending in India</p><FiMoreHorizontal className="happening-more-icon"/> */}
            <div className='happing-icon'><h6>Trending in India</h6> <FiMoreHorizontal className="happening-more-icon"/></div>
            <h5>#DelhiMuder</h5>
            <small>5,243 Tweets</small>
        </div>
        <div className='content'>
            {/* <p>Trending in India</p><FiMoreHorizontal className="happening-more-icon"/> */}
            <div className='happing-icon'><h6>Trending in India</h6> <FiMoreHorizontal className="happening-more-icon"/></div>
            <h5>#DelhiMuder</h5>
            <small>5,243 Tweets</small>
        </div>
    </div>
</div>
  )
}

export default RightSide
