import React, {useState} from 'react';
import Project from './Project';
 
export default function Portfolio (){

    // Replace links with deployed projects and GitHub repos
    const [projects] = useState([
        {
          name: 'note-taker',
          description: 'MERN Stack',
          link: "https://note-taker01.herokuapp.com",
          repo: "https://github.com"
        },
        {
          name: 'weather-dashboard',
          description: 'MERN Stack',
          link: "https://lim204.github.io/Weather-Dashboard/",
          repo: "https://github.com"
        },
        {
          name: 'leftovers',
          description: 'HTML/CSS',
          link: "https://leftovers.herokuapp.com",
          repo: "https://github.com"
        },
        {
          name: 'spin-the-globe',
          description: 'Node/IoT',
          link: "https://repopanda.github.io/spin-the-globe/",
          repo: "https://github.com"
        },
        {
          name: 'workday-scheduler',
          description: 'React/JavaScript/CSS',
          link: "https://lim204.github.io/workday-scheduler/",
          repo: "https://github.com"
        },
      ]);
    
      return (
        <div>
          <div className="flex-row">
            {projects.map((project, idx) => (
              <Project
                project={project}
                key={"project" + idx}
              />
            ))}
          </div>
        </div>
      );
}






// import React from 'react';
// import noteTakerImg from "../assets/images/noteTaker.png";
// import weatherDashboardImg from "../assets/images/Weather-Dashboard.png";
// import leftoversImg from "../assets/images/leftovers.png";
// import globeImg from "../assets/images/globe.jpeg";
// import workdaySchedulerImg from "../assets/images/workday-scheduler.png"
// import garagioImg from "../assets/images/garagio.png"

// export default function Portfolio() {
//     return (
//         <div class="p-3 mb-2 bg-body-secondary">
//             <h1>Projects</h1>

//             <div class="row row-cols-1 row-cols-md-2 g-4" >
//                 <div class="col" style={{ width: "30%" }}>
//                     <div class="card h-100">
//                         <a href="https://note-taker01.herokuapp.com">
//                             {" "}
//                             <img src={noteTakerImg} class="card-img" alt="note taker application" />
//                         </a>
//                         <div class="card-body">
//                             <h4 class="card-title">Noted Taker</h4>
//                             <p class="card-text">An application that provides the user the ability to add new
//                                 notes, and to delete notes.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col" style={{ width: "30%" }}>
//                     <div class="card h-100">
//                         <a href="https://lim204.github.io/Weather-Dashboard/">
//                             {" "}
//                             <img
//                                 src={weatherDashboardImg} class="card-img"
//                                 alt="Weather Dashboard"
//                             />
//                         </a>
//                         <div class="card-body">
//                             <h4 class="card-title">Weather Dashboard</h4>
//                             <p class="card-text">This is a friendly weather application sdfadfdsfsdfadfdasfdas.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col" style={{ width: "30%" }} >
//                     <div class="card h-100">
//                         <a href="https://leftovers.herokuapp.com/">
//                             {" "}
//                             <img src={leftoversImg} class="card-img" alt="Leftovers" />
//                         </a>
//                         <div class="card-body">
//                             <h4 class="card-title">Leftovers</h4>
//                             <p class="card-text">helping community, sharing.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col" style={{ width: "30%" }} >
//                     <div class="card h-100">
//                         <a href="https://repopanda.github.io/spin-the-globe/">
//                             {" "}
//                             <img src={globeImg} class="card-img" alt="spin-the-globe" />
//                         </a>
//                         <div class="card-body">
//                             <h4 class="card-title">Spin The Globe</h4>
//                             <p class="card-text">TjhdsvbafyusfgadsjfhdghfbadsjfhadsvahjksfadsvjfdhjfabdsfhjadbsjfaPlan your next trip!.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col" style={{ width: "30%" }} >
//                     <div class="card h-100">
//                         <a href="https://lim204.github.io/workday-scheduler/">
//                             {" "}
//                             <img src={workdaySchedulerImg} class="card-img" alt="workday-scheduler" />
//                         </a>
//                         <div class="card-body">
//                             <h4 class="card-title">Workday Scheduler</h4>
//                             <p class="card-text">Plan your day with this frriendly applicationsjfdhksfdsjkfdfds.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col" style={{ width: "30%" }}>
//                     <div class="card h-100">
//                         <a href="https://garagio-16dff4078a93.herokuapp.com/">
//                             {" "}
//                             <img src={garagioImg} class="card-img" alt="garagio-app" />
//                         </a>
//                         <div class="card-body">
//                             <h4 class="card-title">Garagio</h4>
//                             <p class="card-text">Have fun selling or buying from the comfort of your home</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </div>

//     )

// }