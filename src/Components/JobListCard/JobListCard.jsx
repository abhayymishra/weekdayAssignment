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
        <div className="full-job-details">
          <div className="logo-with-company-name">
            <img src="" alt="" />
            <div>
              <div className="company-info">
                <h3>Atlassian</h3>
                <h2>Frontend Architect</h2>
              </div>
              <p className="job-location">India</p>
            </div>
          </div>
          <p className="estimated-salary">
            Estimated Salary: ₹15 - 25 LPA{" "}
            <span aria-label="Offered salary range" class="">
              {" "}
              ✅
            </span>
            <br />
          </p>
          <div className="about-company-content">
            <div>
              <p>About Company:</p>
              <div className="about-company-whole-content">
                <p>
                  <strong>About us</strong>
                </p>
                <p>
                  <span>
                    Trumio is the world's first University Projects Ecosystem
                    platform enabling global clients to harness students,
                    professors, and institutional capabilities to speed priority
                    project execution for their business. Next-generation talent
                    organized as teams with diverse skills, find and deliver
                    impactful outcomes working within a secure project
                    environment on Trumio. With AI- assistance built into each
                    process step - Trumio makes it easy for clients and teams to
                    stay on track, collaborate, and achieve desired project
                    outcomes. Beyond achieving project goals, clients, students,
                    and universities benefit from deeper engagement, a positive
                    reputation, and nurturing a vibrant future talent pipeline.
                    Overall, Trumio's mission is to build an equitable future of
                    work, where client and talent engagement and access are
                    truly democratized.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListCard;
