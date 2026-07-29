import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails(props) {
  const headingStyle = {
    color: props.status === "ongoing" ? "green" : "blue",
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{props.status}</h3>

      <dl>
        <dt>Code</dt>
        <dd>{props.code}</dd>

        <dt>Technology</dt>
        <dd>{props.technology}</dd>

        <dt>Coach</dt>
        <dd>{props.coach}</dd>

        <dt>Trainer</dt>
        <dd>{props.trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;