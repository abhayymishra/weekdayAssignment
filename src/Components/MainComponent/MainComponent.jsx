import React from "react";
import "./MainComponent.css";
import JobListCard from "../JobListCard/JobListCard";
import JobFilterItems from "../JobFilterItems/JobFilterItems";

const MainComponent = () => {
  return (
    <>
      <JobFilterItems />

      <main>
        <div>
          <JobListCard />
        </div>
      </main>
    </>
  );
};

export default MainComponent;
