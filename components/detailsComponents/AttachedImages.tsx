import React from "react";
import style from "../../styles/AttachedImages.module.css";

type Props = {
  images: string[];
};

const AttachedImages = ({ images }: Props) => {
  return (
    <div className={style.AttachedImages}>
      <h1 className={style.h1}>Attached images</h1>
      <div className={style.grid_container}>
        {images.map((el, index) => (
          <img src={el} key={index} className={style.grid_item} />
        ))}
      </div>
    </div>
  );
};

export default AttachedImages;
