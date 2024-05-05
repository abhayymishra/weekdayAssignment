// import React, { useEffect } from "react";
// import "./JobListCard.css";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchJobData } from "../../Redux/JobListCardSlicer";

// const JobListCard = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.jobListCard);

//   useEffect(() => {
//     dispatch(fetchJobData());
//   }, []);
//   console.log(data);
//   return (
//     <>
//       {/* <div className="job-list-card">
//         <div className="job-posted-how-much-ago">
//           <div className="job-posted-time-block">
//             <p>⏳ Posted 15 days ago</p>
//           </div>
//         </div>
//         <div className="full-job-details">
//           <div className="logo-with-company-name">
//             <img src="" alt="" />
//             <div>
//               <div className="company-info">
//                 <h3>Atlassian</h3>
//                 <h2>Frontend Architect</h2>
//               </div>
//               <p className="job-location">India</p>
//             </div>
//           </div>
//           <p className="estimated-salary">
//             Estimated Salary: ₹15 - 25 LPA{" "}
//             <span aria-label="Offered salary range" class="">
//               {" "}
//               ✅
//             </span>
//             <br />
//           </p>
//           <div className="about-company-content">
//             <div>
//               <p>About Company:</p>
//               <div className="about-company-whole-content">
//                 <p>
//                   <strong>About us</strong>
//                 </p>
//                 <p>
//                   <span className="fw-400">
//                     Trumio is the world's first University Projects Ecosystem
//                     platform enabling global clients to harness students,
//                     professors, and institutional capabilities to speed priority
//                     project execution for their business. Next-generation talent
//                     organized as teams with diverse skills, find and deliver
//                     impactful outcomes working within a secure project
//                     environment on Trumio. With AI- assistance built into each
//                     process step - Trumio makes it easy for clients and teams to
//                     stay on track, collaborate, and achieve desired project
//                     outcomes. Beyond achieving project goals, clients, students,
//                     and universities benefit from deeper engagement, a positive
//                     reputation, and nurturing a vibrant future talent pipeline.
//                     Overall, Trumio's mission is to build an equitable future of
//                     work, where client and talent engagement and access are
//                     truly democratized.
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="view-job-link">
//             <a href="#" className="fw-400">
//               View job
//             </a>
//           </div>
//           <div className="experience-required">
//             <h3>Minimum Experience</h3>
//             <h2>1 years</h2>
//           </div>
//         </div>
//         <div className="easy-apply-button-container">
//           <div className="easy-apply-button-block">
//             <button>⚡ Easy Apply</button>
//           </div>
//         </div>
//         <div className="unlock-referral-button">
//           <button>Unlock referral asks</button>
//         </div>
//       </div> */}

//       {data.isLoading ? (
//         <h1>loading...</h1>
//       ) : (
//         data.data.map(() => {
//           return (
//             <div className="job-list-card">
//               <div className="job-posted-how-much-ago">
//                 <div className="job-posted-time-block">
//                   <p>⏳ Posted 15 days ago</p>
//                 </div>
//               </div>
//               <div className="full-job-details">
//                 <div className="logo-with-company-name">
//                   <img src="" alt="" />
//                   <div>
//                     <div className="company-info">
//                       <h3>Atlassian</h3>
//                       <h2>Frontend Architect</h2>
//                     </div>
//                     <p className="job-location">India</p>
//                   </div>
//                 </div>
//                 <p className="estimated-salary">
//                   Estimated Salary: ₹15 - 25 LPA{" "}
//                   <span aria-label="Offered salary range" class="">
//                     {" "}
//                     ✅
//                   </span>
//                   <br />
//                 </p>
//                 <div className="about-company-content">
//                   <div>
//                     <p>About Company:</p>
//                     <div className="about-company-whole-content">
//                       <p>
//                         <strong>About us</strong>
//                       </p>
//                       <p>
//                         <span className="fw-400">
//                           Trumio is the world's first University Projects
//                           Ecosystem platform enabling global clients to harness
//                           students, professors, and institutional capabilities
//                           to speed priority project execution for their
//                           business. Next-generation talent organized as teams
//                           with diverse skills, find and deliver impactful
//                           outcomes working within a secure project environment
//                           on Trumio. With AI- assistance built into each process
//                           step - Trumio makes it easy for clients and teams to
//                           stay on track, collaborate, and achieve desired
//                           project outcomes. Beyond achieving project goals,
//                           clients, students, and universities benefit from
//                           deeper engagement, a positive reputation, and
//                           nurturing a vibrant future talent pipeline. Overall,
//                           Trumio's mission is to build an equitable future of
//                           work, where client and talent engagement and access
//                           are truly democratized.
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="view-job-link">
//                   <a href="#" className="fw-400">
//                     View job
//                   </a>
//                 </div>
//                 <div className="experience-required">
//                   <h3>Minimum Experience</h3>
//                   <h2>1 years</h2>
//                 </div>
//               </div>
//               <div className="easy-apply-button-container">
//                 <div className="easy-apply-button-block">
//                   <button>⚡ Easy Apply</button>
//                 </div>
//               </div>
//               <div className="unlock-referral-button">
//                 <button>Unlock referral asks</button>
//               </div>
//             </div>
//           );
//         })
//       )}
//     </>
//   );
// };

// export default JobListCard;

import React, { useEffect } from "react";
import "./JobListCard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobData } from "../../Redux/JobListCardSlicer";

const JobListCard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.jobListCard);

  useEffect(() => {
    dispatch(fetchJobData());
  }, []);
  console.log(data);
  return (
    <>
      {data.isLoading ? (
        <h1>loading...</h1>
      ) : (
        data.data.map(() => {
          return (
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
                        <span className="fw-400">
                          Trumio is the world's first University Projects
                          Ecosystem platform enabling global clients to harness
                          students, professors, and institutional capabilities
                          to speed priority project execution for their
                          business. Next-generation talent organized as teams
                          with diverse skills, find and deliver impactful
                          outcomes working within a secure project environment
                          on Trumio. With AI- assistance built into each process
                          step - Trumio makes it easy for clients and teams to
                          stay on track, collaborate, and achieve desired
                          project outcomes. Beyond achieving project goals,
                          clients, students, and universities benefit from
                          deeper engagement, a positive reputation, and
                          nurturing a vibrant future talent pipeline. Overall,
                          Trumio's mission is to build an equitable future of
                          work, where client and talent engagement and access
                          are truly democratized.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="view-job-link">
                  <a href="#" className="fw-400">
                    View job
                  </a>
                </div>
                <div className="experience-required">
                  <h3>Minimum Experience</h3>
                  <h2>1 years</h2>
                </div>
              </div>
              <div className="easy-apply-button-container">
                <div className="easy-apply-button-block">
                  <button>⚡ Easy Apply</button>
                </div>
              </div>
              <div className="unlock-referral-button">
                <button>Unlock referral asks</button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default JobListCard;
