import React from 'react';
import noteTakerImg from "../assets/images/noteTaker.png";
import weatherDashboardImg from "../assets/images/Weather-Dashboard.png";
import leftoversImg from "../assets/images/leftovers.png";
import globeImg from "../assets/images/globe.jpeg";
import workdaySchedulerImg from "../assets/images/workday-scheduler.png"

export default function Portfolio() {
    return (
        <div class="p-3 mb-2 bg-body-secondary">
            <h1>Projects</h1>

            {/* <div>
                <div className="job-img">
                    <a href="https://note-taker01.herokuapp.com">
                        {" "}
                        <img
                            src={noteTakerImg}
                            alt="Note Taker"
                        />
                    </a>
                </div>
                <div className="job-text">
                    <h4>Note Taker</h4>
                    <p>
                        An application that provides the user the ability to add new
                        notes, and to delete notes.
                    </p>
                </div>
            </div> */}

            {/* <div class="card text-bg-dark" style={{ width: "30%" }}>
                <div>
                    <a href="https://note-taker01.herokuapp.com">
                        {" "}
                        <img src={noteTakerImg} class="card-img" alt="note taker application" />
                    </a>
                </div>

                <div >
                    <h4 class="card-title">Noted Taker</h4>
                    <p class="card-text">An application that provides the user the ability to add new
                        notes, and to delete notes.</p>

                </div>

            </div> */}

            <div class="row row-cols-1 row-cols-md-2 g-4" >
                <div class="col" style={{ width: "30%" }}>
                    <div class="card h-100">
                        <a href="https://note-taker01.herokuapp.com">
                            {" "}
                            <img src={noteTakerImg} class="card-img" alt="note taker application" />
                        </a>
                        <div class="card-body">
                            <h4 class="card-title">Noted Taker</h4>
                            <p class="card-text">An application that provides the user the ability to add new
                                notes, and to delete notes.</p>
                        </div>
                    </div>
                </div>

                <div class="col" style={{ width: "30%" }}>
                    <div class="card h-100">
                        <a href="https://lim204.github.io/Weather-Dashboard/">
                            {" "}
                            <img
                                src={weatherDashboardImg} class="card-img"
                                alt="Weather Dashboard"
                            />
                        </a>
                        <div class="card-body">
                            <h4 class="card-title">Weather Dashboard</h4>
                            <p class="card-text">This is a friendly weather application sdfadfdsfsdfadfdasfdas.</p>
                        </div>
                    </div>
                </div>

                <div class="col" style={{ width: "30%" }} >
                    <div class="card h-100">
                        <a href="https://leftovers.herokuapp.com/">
                            {" "}
                            <img src={leftoversImg} class="card-img" alt="Leftovers" />
                        </a>
                        <div class="card-body">
                            <h4 class="card-title">Leftovers</h4>
                            <p class="card-text">helping community, sharing.</p>
                        </div>
                    </div>
                </div>

                <div class="col" style={{ width: "30%" }} > 
                    <div class="card h-100">
                        <a href="https://repopanda.github.io/spin-the-globe/">
                            {" "}
                            <img src={globeImg} class="card-img" alt="spin-the-globe" />
                        </a>
                        <div class="card-body">
                            <h4 class="card-title">Spin The Globe</h4>
                            <p class="card-text">TjhdsvbafyusfgadsjfhdghfbadsjfhadsvahjksfadsvjfdhjfabdsfhjadbsjfaPlan your next trip!.</p>
                        </div>
                    </div>
                </div>

                <div class="col" style={{ width: "30%" }} >
                    <div class="card h-100">
                        <a href="https://lim204.github.io/workday-scheduler/">
                            {" "}
                            <img src={workdaySchedulerImg} class="card-img" alt="workday-scheduler" />
                        </a>
                        <div class="card-body">
                            <h4 class="card-title">Workday Scheduler</h4>
                            <p class="card-text">Plan your day with this frriendly applicationsjfdhksfdsjkfdfds.</p>
                        </div>
                    </div>
                </div>

                <div class="col" style={{ width: "30%" }}>
                    <div class="card h-100">
                        <a href="https://garagio-16dff4078a93.herokuapp.com/">
                            {" "}
                            <img src={workdaySchedulerImg} class="card-img" alt="garagio-app" />
                        </a>
                        <div class="card-body">
                            <h4 class="card-title">Garagio</h4>
                            <p class="card-text">Have selling or buying from the comfort of your home</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )

}