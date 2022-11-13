import React from "react";

type Props = {
  title: string;
};

const ShortTopDescription = ({ title }: Props) => {
  const normal: string = title;
  const short: string = title.slice(0, 100);
  return (
    <>
      <div className="ShortTopBox">
        <h3 className="h3">{normal}</h3>
      </div>
      <style jsx>{`
        .ShortTopBox {
          width: 100%;
          height: 50px;
          margin-bottom: 4px;
        }
        .h3 {
          line-height: 25px;
          color: #3a4562;
          font-size: 21px;
          font-family: "Proxima Nova Bold";
          letter-spacing: -0.04em;
        }
      `}</style>
    </>
  );
};

export default ShortTopDescription;
