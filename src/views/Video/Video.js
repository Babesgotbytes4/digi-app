import React from "react";
import "../../index.css";
// import video from "./video.mp4";
import ReactPlayer from './video.mp4'

export const Video = () => {
  return (
    <>
      <div className="container">
         <h3>Learn more about how the app works</h3>
         <br />
         <ReactPlayer width="480px" height="240px" controls url='https://www.youtube.com/watch?v=f02mOEt11OQ&t=2443s'>play</ReactPlayer>

<br /> 
       <button className="button button1"><a href="https://www.freecodecamp.org/learn/responsive-web-design/">Learn moore: Basic of HTML and HTML5</a></button><br />
       <button className="button button1"><a href="https://www.freecodecamp.org/learn/responsive-web-design/">Learn moore: of HTML and HTML5</a></button><br />
       <button className="button button1"><a href="https://www.freecodecamp.org/learn/responsive-web-design/">Learn moore: Basic of HTML and HTML5</a></button><br />
       <button className="button button1"><a href="https://www.freecodecamp.org/learn/responsive-web-design/">Learn moore: Basic of HTML and HTML5</a></button><br />
       <button className="button button1"><a href="https://www.freecodecamp.org/learn/responsive-web-design/">Learn moore: Basic of HTML and HTML5</a></button><br />
      </div>


    </>
  );
};

export default Video;
