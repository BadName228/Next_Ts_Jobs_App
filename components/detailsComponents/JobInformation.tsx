import React from "react";
import style from "../../styles/Descriptions.module.css";

type Props = {
  desc: string;
};

const JobInformation = ({ desc }: Props) => {
  const other: string = desc.split("Responsopilities:")[0];
  const responsopilities: string = desc
    .split("Compensation & Benefits")[1]
    .slice(2);
  const benefits: string[] = desc
    .split("Compensation & Benefits:")[1]
    .split(". ");

  return (
    <div className={style.jobDescription}>
      <p>{other}</p>
      <h3 className={style.h22}>Responsopilities</h3>
      <p>{responsopilities}</p>
      <h3 className={style.h22}>Compensation & Benefits</h3>
      <ul className={style.ul}>
        {benefits.map((el) => (
          <li key={el}>
            <p>{el}.</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobInformation;
