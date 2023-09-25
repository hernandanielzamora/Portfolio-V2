import React from 'react';
import '../styles/Aboutme.scss';
import aboutGif from '../media/gif4-unscreen.gif';

const AboutMe = () => (
  <>
    <section id="aboutme">
      <h2 className="title aboutme-title">About Me</h2>
      <div className="aboutme-container">
        <p className="aboutme-text">
          Hey there! I am Hernán Zamora, a passionate web developer with a
          knack for crafting innovative solutions. I am on the verge of earning
          my software engineering degree from the Technological University of
          Argentina. During my academic journey, I have honed my skills in
          cutting-edge technologies and best practices. I thrive on challenges
          and am unwaveringly committed to delivering top-notch results. With
          nearly 40 projects under my belt, I excel in JavaScript, React,
          Redux, Ruby on Rails, and more. I am always excited to embrace new
          challenges and stay at the forefront of industry trends. Beyond
          coding, I enjoy other activities like going to the gym, playing
          football and gaming, bringing a unique balance to my life. If you are
          looking for a web developer who injects energy, enthusiasm, and
          expertise into projects, your quest ends here!
        </p>
        <img src={aboutGif} alt="Loadder Gif" className="about-img"/>
      </div>
    </section>
    <hr />
  </>
);

export default AboutMe;
