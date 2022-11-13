import React from "react";
import style from "../../styles/Descriptions.module.css";

type Props = {
  salary: string;
};

const Salary = ({ salary }: Props) => {
  const MinMax: string[] = salary.split("-").map((el) => el.slice(0, 2));

  return (
    <div className={style.float}>
      <h2 className={style.h2}>{`€ ${MinMax[0]}000–${MinMax[1]}000`}</h2>
      <p className={style.p}>Brutto, per year</p>
    </div>
  );
};

export default Salary;
