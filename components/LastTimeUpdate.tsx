import styles from "../styles/CardStyle.module.css";

type Props = {
  time: string
}

const LastTimeUpdate = ({ time }: Props) => {
  const year: number = new Date(time).getFullYear();

  // if last update not in this year
  if (new Date().getFullYear() !== year) {
    return (
      <p className={styles.postInfo}>
        Posted {new Date().getFullYear() - year} years ago
      </p>
    );
  }

  if (new Date().getFullYear() == year) {
    if (new Date().getMonth() === new Date(time).getMonth()) {
      // if last update in this year and in this month
      return (
        <p className={styles.postInfo}>
          Posted {new Date().getDate() - new Date(time).getDate()} days ago
        </p>
      );
    } else {
      // if last update in this year but not in this month
      return (
        <p className={styles.postInfo}>
          Posted {new Date().getMonth() - new Date(time).getMonth()} month ago
        </p>
      );
    }
  }

  return null;
};

export default LastTimeUpdate;