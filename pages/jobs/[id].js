import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

import styles from "../../styles/CardDetails.module.css";

import { ImShare2 } from "react-icons/im";
import { FaChevronLeft } from "react-icons/fa";
import Mapa from "../../components/Map";
import AdditionalInfo from "../../components/detailsComponents/AdditionalInfo";
import AttachedImages from "../../components/detailsComponents/AttachedImages";
import Descriptions from "../../components/detailsComponents/Descriptions";
import Link from "next/link";

export default function () {
  const { query, isReady } = useRouter();
  const [data, setData] = React.useState([]);
  let filter;

  React.useEffect(() => {
    const TOKEN = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
    const POSTS_FETCH = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${TOKEN}`;
    axios.get(POSTS_FETCH).then((res) => setData(res.data));
  }, []);

  if (isReady) {
    const filtered = data.find((el) => el.id === query.id);
    filter = filtered;
  }

  const AddToFavourite = () => {
    alert("Add to Fav");
  };
  const share = () => {
    alert("You are share this post");
  };
  const apply = () => {
    alert("Apply!");
  };

  if (filter) {
    return (
      <div id={styles.body}>
      <Head>
        <title>Job, {filter.name}</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
        <div id={styles.Mainfield}>
          <div id={styles.descriptions}>
            <div id={styles.header}>
              <h1 id={styles.h11}>Job Details</h1>
              <div
                className={styles.AddToFavourite}
                onClick={() => AddToFavourite()}
              >
                <img
                  src="https://cdn.icon-icons.com/icons2/1946/PNG/512/1904655-add-bookmark-favorite-favourite-important-note-ribbon_122505.png"
                  className={styles.IconAddToFavourite}
                />
                <h3>Save to my list</h3>
              </div>
              <div className={styles.shareButton} onClick={() => share()}>
                <ImShare2 className={styles.svg} />
                <h3>Share</h3>
              </div>
            </div>
            <button onClick={() => apply()} className={styles.applyButton}>
              APPLY NOW
            </button>
            <Descriptions
              title={filter.title}
              salary={filter.salary}
              description={filter.description}
              update={filter.updatedAt}
            />
            <button onClick={() => apply()} className={styles.applyButton}>
              APPLY NOW
            </button>
            <AdditionalInfo
              employment={filter.employment_type}
              benefits={filter.benefits}
            />
            <AttachedImages images={filter.pictures} />
          </div>
          <Mapa info={filter} />
        </div>
        <Link href="/">
          <button className={styles.buttonBackToHome}>
            <FaChevronLeft className={styles.buttonBackToHomeArrow} />
            <p className={styles.buttonBackToHomeP}>RETURN TO JOB BOARD</p>
          </button>
        </Link>
      </div>
    );
  }
}
