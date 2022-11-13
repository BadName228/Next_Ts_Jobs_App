import React from "react";

import styles from "../styles/CardStyle.module.css";

type Props = {
  url: string
}

const NewImage = ({url}: Props) => {

  return (
    <img src={url} alt="User foto profile" className={styles.JobsProfilePhoto} />
  );
}

export default NewImage;