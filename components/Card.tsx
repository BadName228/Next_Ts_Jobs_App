import styles from "../styles/CardStyle.module.css";
import { Rate } from "antd";
import React from "react";
import axios from "axios";


import LastTimeUpdate from "./LastTimeUpdate";
import IntPostCard from "../types/IntResponcePostApi";
import NewImage from "./NewImage";
import ShortDownDescription from "./boadrDetails/ShortDownDescription";
import ShortTopDescription from "./boadrDetails/ShortTopDescription";
import Location from "./boadrDetails/Location";

import Link from "next/link";

type Props = {
  data: IntPostCard
}

const Card = ({ data }: Props) => {
  const [src, setSrc] = React.useState<string>('');

  const randomPage: number = Math.floor(Math.random() * 1000);
  const RandomRateForJobs: number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

  React.useEffect(() => {
    axios
      .get(
        `https://picsum.photos/v2/list?page=${randomPage}&limit=1`
      )
      .then((res) => {
        setSrc(res.data[0].download_url)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const AddToFavourite = (): void => {
    alert("Add to Fav");
  };

  return (
    <Link
      href={{
        pathname: `/jobs/${data.id}`, 
        query: {
          id: data.id,
          rate: RandomRateForJobs,
          img_url: src
        }}}
    >
      <span className={styles.cardMainField}>
        <div className={styles.cardContainer}>
          <NewImage url={src}/>
          <div className={styles.AboutJob}>
            <ShortTopDescription title={data.title}/>
            <ShortDownDescription name={data.name} title={data.title}/>
            <Location coord={data.location}/>
          </div>
          <div className={styles.stars}>
            <Rate defaultValue={RandomRateForJobs} disabled />
          </div>
          <div className={styles.addToFavourite}>
            <img
              src="https://cdn.icon-icons.com/icons2/1946/PNG/512/1904655-add-bookmark-favorite-favourite-important-note-ribbon_122505.png"
              className={styles.IconAddToFavourite}
              onClick={() => AddToFavourite()}
            />
            <div className={styles.postBlock}>
            <LastTimeUpdate time={data.updatedAt} />
            </div>
          </div>
        </div>
      </span>
    </Link>
  );
};

export default Card;
