import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Pagination } from "antd";

type Props = {
  size: number;
  setpage: any
};

const Paginations = ({ size, setpage }: Props) => {
  const selectPage = (e: number): void => {
    setpage(e);
  };

  return (
    <div id="PaginationBox">
      <div>
        <Pagination
          defaultCurrent={1}
          total={size}
          defaultPageSize={5}
          onChange={(e) => selectPage(e)}
        />
      </div>
      <style jsx>{`
        #PaginationBox {
          margin: 0 auto;
          padding-left: 10px;
          padding-top: 10px;
          background: #ffffff;
          width: 291px;
          height: 50px;
          border-radius: 10px;
          box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08),
            0px 2px 1px -1px rgba(0, 0, 0, 0.04),
            0px 1px 3px rgba(0, 0, 0, 0.12);
          color: #70778b;
        }
      `}</style>
    </div>
  );
};

export default Paginations;
