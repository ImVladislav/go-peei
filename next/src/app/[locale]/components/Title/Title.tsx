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
      {/* <div className={styles.svg}>
        <Image
          style={{
            height: "4px",
            objectFit: "cover",
          }}
          src="/main/Rectangle.svg"
          alt="Line under the title"
          width={width}
          height={4}
        />
      </div> */}
    </div>
  );
};

export default Title;
