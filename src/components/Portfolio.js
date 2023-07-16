import React from 'react';
import noteTakerImg from "../assets/images/noteTaker.png";
import weatherDashboardImg from "../assets/images/Weather-Dashboard.png";
import leftoversImg from "../assets/images/leftovers.png";
import globeImg from "../assets/images/globe.jpeg";
import workdaySchedulerImg from "../assets/images/workday-scheduler.png"

export default function Portfolio() {
    return(
        <div>
            <h1>Projects</h1>

            <div>
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
            </div>

        </div>
        

        


    )


}