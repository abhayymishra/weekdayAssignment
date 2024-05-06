import React, { useEffect, useState, useRef, useCallback } from "react";
import "./JobListCard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobData } from "../../Redux/JobListCardSlicer";
import CustomLoader from "../CustomLoader/CustomLoader";

const JobListCard = () => {
  const dispatch = useDispatch(); // api content fetched
  const { isLoading, data, hasMore } = useSelector(
    (state) => state.jobListCard
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const observer = useRef();

  const [expandedStates, setExpandedStates] = useState({});

  const handleToggleExpand = (id) => {
    // toggles the read more.. button inside card
    setExpandedStates((prevExpandedStates) => ({
      ...prevExpandedStates,
      [id]: !prevExpandedStates[id],
    }));
  };

  useEffect(() => {
    // fetches the job card data from api in batch of 10 cards per page.
    setIsLoaded(false);
    dispatch(fetchJobData({ limit, offset }));
  }, [dispatch, offset, limit]);
  console.log(data);

  const lastJobCardRef = useCallback(
    //  handling the infinite scrolling
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prevOffset) => prevOffset + 10);
          setLimit((prevLimit) => prevLimit + 10);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    // handles the loader before the data is loaded from api
    if (!isLoading) {
      setIsLoaded(true);
    }
  }, [isLoading]);

  // the job card component with mapped data from api
  return (
    <>
      {isLoading && offset === 0 ? (
        <CustomLoader /> // display loader component at the time when data is fetching from api
      ) : (
        data &&
        data.slice(0, limit).map((jobCard) => {
          const isExpanded = expandedStates[jobCard.id] || false;
          if (
            !jobCard.companyName || // for all values which are null or undefined in api
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
              ref={lastJobCardRef}
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
                  <img
                    src={jobCard.logoUrl}
                    alt={jobCard.companyName}
                    loading="lazy"
                  />
                  <div>
                    <div className="company-info">
                      <h3>{jobCard.companyName}</h3>
                      <h2>{jobCard.jobRole}</h2>
                    </div>
                    <p className="job-location">{jobCard.location}</p>
                  </div>
                </div>
                <p className="estimated-salary">
                  Estimated Salary: {jobCard.salaryCurrencyCode}&nbsp;
                  {jobCard.minJdSalary} - {jobCard.salaryCurrencyCode}&nbsp;
                  {jobCard.maxJdSalary} LPA{" "}
                  <span aria-label="Offered salary range" class="">
                    {" "}
                    ✅
                  </span>
                  <br />
                </p>
                <div
                  className={`about-company-content ${
                    isExpanded ? "expanded" : ""
                  }`}
                >
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
                  <button
                    className="fw-400"
                    onClick={() => handleToggleExpand(jobCard.id)}
                  >
                    {" "}
                    {isExpanded ? "Read Less.." : "Read More.."}
                  </button>
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
       {/* display loader component at the time when data is fetching from api */}
      {isLoading && <CustomLoader />}
    </>
  );
};

export default JobListCard;
