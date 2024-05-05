import React from "react";
import "./MainComponent.css";
import JobListCard from "../JobListCard/JobListCard";

const MainComponent = () => {
  return (
    <>
      <main>
        <div>
          <JobListCard />
          <JobListCard />
          <JobListCard />
          <JobListCard />
          <JobListCard />
          <JobListCard />
          <JobListCard />
        </div>
      </main>
    </>
  );
};

export default MainComponent;
