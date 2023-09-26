import React from 'react';
//  link to download resume
export default function Resume() {
  return (
    // <div class="p-3 mb-2 bg-body-secondary">
    //   <h1>Resume</h1>
    //   <p>
    //     Please feel free to check out my list of Developer
    //     Proficiencies!
    //   </p>
    //   <p>
    //     Download my <a href="https://www.linkedin.com/">resume</a>
    //     </p>
    //   <section id="home-page-body" className="resume-body">
    //     <div className="article column1">
    //       <p className="column-title">Font-End</p>
    //       <p className="column-text">
    //         <ul>
    //           <li>HTML5</li>
    //           <li>CSS</li>
    //           <li>JavaScript</li>
    //           <li>APIs</li>
    //           <li>Bootstrap</li>
    //           <li>GIT</li>
    //         </ul>
    //       </p>
    //     </div>

    //     <div className="article column2">
         

    //       <p className="column-title">Back-End</p>
    //       <p className="column-text">
    //         <ul>
    //           <li>Node.Js</li>
    //           <li>Jest</li>
    //           <li>Express.js</li>
    //           <li>MySQL</li>
    //           <li>Sequelize</li>
    //           <li>Object-Relational Mapping(ORM)</li>
    //           <li>Model-View-Controller (MVC)</li>
    //         </ul>
    //       </p>
    //     </div>

    //     <div className="article column3">
          
    //       <p className="column-title">Performance Tech</p>
    //       <p className="column-text">
    //         <ul>
    //           <li>NoSQL</li>
    //           <li>Progressive Web Applications (PWA)</li>
    //           <li>MongoDB</li>
    //           <li>Mongoose</li>
    //           <li>GraphQL</li>
    //           <li>React</li>
    //           <li>MERN</li>
    //           <li>State</li>
    //         </ul>
    //       </p>
    //     </div>
    //   </section>

    // </div>

    <section className="my-5">
    <div className="my-2">
    <p>
      Download my <a href="https://www.linkedin.com/">resume</a>
      </p>
      <h3>Front-end Proficiencies</h3>
      <ul className="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul className="skills">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  </section>
  );
}
