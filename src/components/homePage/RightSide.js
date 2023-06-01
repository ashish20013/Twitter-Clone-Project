import React from "react";
import "./homeLayout.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const RightSide = () => {
  return (
    <div className="right-container">
      <div className="search-container">
        <FiSearch></FiSearch>
        <input placeholder="search"></input>
      </div>

      <div className="happing-container">
        <h2>What’s happening</h2>
        <div className="content">
          {/* <p>Trending in India</p><CiCircleMore className="nav-icon"/> */}
          <div className="happing-icon">
            <h6>Trending in India</h6>{" "}
            <FiMoreHorizontal className="happening-more-icon" />
          </div>
          <h5>#DelhiMuder</h5>
          <small>5,243 Tweets</small>
        </div>
        <div className="content">
          {/* <p>Trending in India</p><FiMoreHorizontal className="happening-more-icon"/> */}
          <div className="happing-icon">
            <h6>Trending in India</h6>{" "}
            <FiMoreHorizontal className="happening-more-icon" />
          </div>
          <h5>#DelhiMuder</h5>
          <small>5,243 Tweets</small>
        </div>
        <div className="content">
          {/* <p>Trending in India</p><FiMoreHorizontal className="happening-more-icon"/> */}
          <div className="happing-icon">
            <h6>Trending in India</h6>{" "}
            <FiMoreHorizontal className="happening-more-icon" />
          </div>
          <h5>#DelhiMuder</h5>
          <small>5,243 Tweets</small>
        </div>
        <div className="content">
          {/* <p>Trending in India</p><FiMoreHorizontal className="happening-more-icon"/> */}
          <div className="happing-icon">
            <h6>Trending in India</h6>{" "}
            <FiMoreHorizontal className="happening-more-icon" />
          </div>
          <h5>#DelhiMuder</h5>
          <small>5,243 Tweets</small>
        </div>
        <div className="content">
          {/* <p>Trending in India</p><FiMoreHorizontal className="happening-more-icon"/> */}
          <div className="happing-icon">
            <h6>Trending in India</h6>{" "}
            <FiMoreHorizontal className="happening-more-icon" />
          </div>
          <h5>#DelhiMuder</h5>
          <small>5,243 Tweets</small>
        </div>
      </div>
      
        <div className="main">
          <div className="who">
            <h2>Who To Follow</h2>
          </div>
          <div className="img-main">
            <div className="img-container">
              <img src="https://images.pexels.com/photos/2526127/pexels-photo-2526127.jpeg?auto=compress&cs=tinysrgb&w=300"></img>
            </div>
            <div className="txtbtn">
              <h4>Tesla</h4>
              <p>@Tesla</p>
            </div>

            <button>Follow</button>
          </div>
     <div className="img-main">
            <div className="img-container">
              <img src="https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=300"></img>
            </div>
            <div className="txtbtn">
              <h4>Lenskart</h4>
              </div>
              <button>Follow</button>
           
          </div> 
          <div className="img-main">
            <div className="img-container">
              <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300"></img>
            </div>
            <div className="txtbtn">
              <h4>Swiggy</h4>
              </div>
              <button>Follow</button>
           
          </div> 
        </div>
      </div>

  );
};

export default RightSide;
