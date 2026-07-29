import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {
  const employees = [
    {
      id: 1,
      name: "John",
      department: "IT"
    },
    {
      id: 2,
      name: "David",
      department: "HR"
    },
    {
      id: 3,
      name: "Mary",
      department: "Finance"
    }
  ];

  return (
    <div>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  );
}

export default EmployeeList;