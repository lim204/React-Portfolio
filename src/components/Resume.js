import React from 'react';
//  link to download resume
export default function Resume() {
  return (
    <div class="p-3 mb-2 bg-body-secondary">
      <h1>Resume</h1>
      <p>
        Please feel free to check out my list of Developer
        Proficiencies!
      </p>
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Font-End</p>
          <p className="column-text">
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>GIT</li>
            </ul>
          </p>
        </div>

        <div className="article column2">
          {/* <p><img src="./assets/images/streamline-icon-ai-robot-waiter@48x48.PNG"></p> */}

          <p className="column-title">Back-End</p>
          <p className="column-text">
            <ul>
              <li>Node.Js</li>
              <li>Jest</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller (MVC)</li>
            </ul>
          </p>
        </div>

        <div className="article column3">
          {/* <p><img src="./assets/images/streamline-icon-soft-drinks-glass-ice@48x48.PNG"></p> */}
          <p className="column-title">Performance Tech</p>
          <p className="column-text">
            <ul>
              <li>NoSQL</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>MERN</li>
              <li>State</li>
            </ul>
          </p>
        </div>
      </section>

    </div>
  );
}
