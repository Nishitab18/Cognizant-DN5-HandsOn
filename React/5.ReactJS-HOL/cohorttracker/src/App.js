import React from "react";
import CohortDetails from "./CohortDetails";
import cohorts from "./cohorts";

function App() {
  return (
    <div>
      <h1>Cohorts Details</h1>

      {cohorts.map((cohort, index) => (
        <CohortDetails
          key={index}
          code={cohort.code}
          technology={cohort.technology}
          status={cohort.status}
          coach={cohort.coach}
          trainer={cohort.trainer}
        />
      ))}
    </div>
  );
}

export default App;