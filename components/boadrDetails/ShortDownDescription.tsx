import React from "react";

type Props = {
  name: string;
  title: string;
};

const ShortDownDescription = ({ name, title }: Props) => {
  const normal: string = `${name} • ${title}`;
  const short: string = `${name} • ${title.slice(0, 100)}...`;
  return (
    <>
      <div className="description">{title.length > 100 ? short : normal}</div>
      <style jsx>{`
        .description {
          font-family: "Proxima Nova Regular";
          font-size: 16px;
          color: #878d9d;
          font-weight: 500;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
};

export default ShortDownDescription;
