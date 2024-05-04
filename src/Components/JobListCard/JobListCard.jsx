import React from "react";
import "./JobListCard.css";

const JobListCard = () => {
  return (
    <>
      <div className="job-list-card">
        <div className="job-posted-how-much-ago">
          <div className="job-posted-time-block">
            <p>⏳ Posted 15 days ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListCard;
