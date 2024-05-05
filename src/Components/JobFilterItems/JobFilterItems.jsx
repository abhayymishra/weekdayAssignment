import React from "react";
import "./JobFilterItems.css";
import JobFilterSingleCriteria from "../JobFilterSingleCriteria/JobFilterSingleCriteria";

const JobFilterItems = () => {
  return (
    <>
      <header>
        <JobFilterSingleCriteria />
        <JobFilterSingleCriteria />
        <JobFilterSingleCriteria />
        <JobFilterSingleCriteria />
        <JobFilterSingleCriteria />
        <JobFilterSingleCriteria />
      </header>
    </>
  );
};

export default JobFilterItems;
