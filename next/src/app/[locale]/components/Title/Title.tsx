// import Image from "next/image";
import styles from "./title.module.scss";
interface TitleProps {
  newStyles?: string;
  children: React.ReactNode;
  width?: number;
}

const Title = ({ newStyles, width, children }: TitleProps) => {
  return (
    <div className={styles.box}>
      <h2 className={`${styles.title} ${newStyles}`}>{children}</h2>
      <div className={styles.line}></div>
    </div>
  );
};

export default Title;
