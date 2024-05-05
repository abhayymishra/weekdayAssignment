// import React, { useEffect, useState } from "react";
// import "./JobListCard.css";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchJobData } from "../../Redux/JobListCardSlicer";
// import CustomLoader from "../CustomLoader/CustomLoader";

// const JobListCard = () => {
//   const dispatch = useDispatch();
//   const { isLoading, data } = useSelector((state) => state.jobListCard);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     dispatch(fetchJobData());
//   }, [dispatch]);
//   console.log(data);

//   useEffect(() => {
//     if (!isLoading) {
//       setIsLoaded(true);
//     }
//   }, [isLoading]);
//   return (
//     <>
//       {isLoading ? (
//         <CustomLoader />
//       ) : (
//         data.jdList &&
//         data.jdList.map((jobCard) => {
//           if (
//             !jobCard.companyName ||
//             !jobCard.jobRole ||
//             !jobCard.location ||
//             !jobCard.minJdSalary ||
//             !jobCard.maxJdSalary ||
//             !jobCard.jobDetailsFromCompany ||
//             !jobCard.jdLink ||
//             !jobCard.minExp
//           ) {
//             // Skip rendering the job card if any detail is empty
//             return null;
//           }
//           return (
//             <div
//               className={`job-list-card ${isLoaded ? "loaded" : ""}`}
//               key={jobCard.id}
//             >
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
//                       <h3>{jobCard.companyName}</h3>
//                       <h2>{jobCard.jobRole}</h2>
//                     </div>
//                     <p className="job-location">{jobCard.location}</p>
//                   </div>
//                 </div>
//                 <p className="estimated-salary">
//                   Estimated Salary: ₹{jobCard.minJdSalary} - ₹
//                   {jobCard.maxJdSalary} LPA{" "}
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
//                           {jobCard.jobDetailsFromCompany}
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="view-job-link">
//                   <a href={jobCard.jdLink} className="fw-400">
//                     View job
//                   </a>
//                 </div>
//                 <div className="experience-required">
//                   <h3>Minimum Experience</h3>
//                   <h2>{jobCard.minExp} years</h2>
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

import React, { useEffect, useState } from "react";
import "./JobListCard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobData } from "../../Redux/JobListCardSlicer";
import CustomLoader from "../CustomLoader/CustomLoader";

const JobListCard = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.jobListCard);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchJobData({ offset: 0 }));
  }, [dispatch]);
  console.log(data);

  useEffect(() => {
    if (!isLoading) {
      setIsLoaded(true);
    }
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !isLoading
      ) {
        setPage((prevPage) => prevPage + 1);
        dispatch(fetchJobData({ offset: (page - 1) * 10 }));
      }
      console.log("scroll at last");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch,isLoading , page]);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchJobData({ offset: (page - 1) * 10 }));
    }
  }, [dispatch, page]);
  return (
    <>
      {isLoading && !data.length ? (
        <CustomLoader />
      ) : (
        data.jdList &&
        data.jdList.map((jobCard) => {
          if (
            !jobCard.companyName ||
            !jobCard.jobRole ||
            !jobCard.location ||
            !jobCard.minJdSalary ||
            !jobCard.maxJdSalary ||
            !jobCard.jobDetailsFromCompany ||
            !jobCard.jdLink ||
            !jobCard.minExp
          ) {
            // Skip rendering the job card if any detail is empty
            return null;
          }
          return (
            <div
              className={`job-list-card ${isLoaded ? "loaded" : ""}`}
              key={jobCard.id}
            >
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
                      <h3>{jobCard.companyName}</h3>
                      <h2>{jobCard.jobRole}</h2>
                    </div>
                    <p className="job-location">{jobCard.location}</p>
                  </div>
                </div>
                <p className="estimated-salary">
                  Estimated Salary: ₹{jobCard.minJdSalary} - ₹
                  {jobCard.maxJdSalary} LPA{" "}
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
                          {jobCard.jobDetailsFromCompany}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="view-job-link">
                  <a href={jobCard.jdLink} className="fw-400">
                    View job
                  </a>
                </div>
                <div className="experience-required">
                  <h3>Minimum Experience</h3>
                  <h2>{jobCard.minExp} years</h2>
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
      {isLoading && <CustomLoader />}
    </>
  );
};

export default JobListCard;
