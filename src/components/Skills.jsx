import React from 'react';
import '../styles/Skills.scss';

const Skills = () => (
  <>
    <section>
      <h2 className="title skill-title">Skills</h2>
      <div className="skills-container">
        <div>
          <h3 className="sub-title">Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
          </ul>
        </div>
        <div>
          <h3 className="sub-title">Frameworks</h3>
          <ul>
            <li>Bootstrap</li>
            <li>Ruby on Rails</li>
            <li>Python</li>
            <li>RSPec</li>
            <li>CapyBara</li>
            <li>Selenium</li>
          </ul>
        </div>
        <div>
          <h3 className="sub-title">Tools</h3>
          <ul>
            <li>Github</li>
            <li>Git</li>
            <li>Slack</li>
            <li>VS Code</li>
            <li>Chrome DevTools</li>
          </ul>
        </div>
        <div>
          <h3 className="sub-title">Professional</h3>
          <ul>
            <li>Mentoring</li>
            <li>Leadership</li>
            <li>Problem Solving</li>
            <li>Pair Programming</li>
            <li>Attention to detail</li>
          </ul>
        </div>
      </div>
    </section>
    <hr />
  </>
);

export default Skills;
