import styles from "./Title.module.scss";

const Title = ({ size, children }) => {
  switch (size) {
    case "s":
      return <h3 className={styles.s}>{children}</h3>;
    case "m":
      return <h2 className={styles.m}>{children}</h2>;
    case "l":
      return (
        <h1 className={styles.l}>
          <p className={styles.p}>{children}</p>
        </h1>
      );
      
    default:
      return <></>;
     
  }
};

export default Title;
