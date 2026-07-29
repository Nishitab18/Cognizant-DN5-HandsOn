import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h3>{employee.name}</h3>
      <p>Department: {employee.department}</p>

      <button className={theme}>
        View Details
      </button>

      <hr />
    </div>
  );
}

export default EmployeeCard;