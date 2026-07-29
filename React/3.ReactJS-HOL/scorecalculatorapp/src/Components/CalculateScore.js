import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ Name, School, Total, Goal }) {
  const average = Total / Goal;

  return (
    <div className="score-card">
      <h1>Student Details:</h1>

      <p>
        <span className="label">Name:</span> {Name}
      </p>

      <p>
        <span className="label">School:</span> {School}
      </p>

      <p>
        <span className="label">Total:</span> {Total}
      </p>

      <p>
        <span className="label">Score:</span> {average}
      </p>
    </div>
  );
}

export default CalculateScore;