import styles from "./title.module.scss";
interface TitleProps {
  newStyles?: string;
  children: React.ReactNode;
}

const Title = ({ newStyles, children }: TitleProps) => {
  return (
    <div className={styles.box}>
      <h2 className={`${styles.title} ${newStyles}`}>{children}</h2>
      <div className={styles.line}></div>
    </div>
  );
};

export default Title;
