import React from "react";
import style from "../../styles/Descriptions.module.css";

import Salary from "./Salary";
import LastTimeUpdate from "../LastTimeUpdate";
import JobInformation from "../detailsComponents/JobInformation";

type Props = {
  title: string;
  salary: string;
  description: string;
  update: string;
};

const Descriptions = ({ title, salary, description, update }: Props) => {
  return (
    <div className={style.idAndsalary}>
      <div className={style.flex}>
        <div className={style.title}>
          <h2>{title}</h2>
        </div>
        <Salary salary={salary} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <LastTimeUpdate time={update} />
      </div>
      <JobInformation desc={description}/>
    </div>
  );
};

export default Descriptions;
