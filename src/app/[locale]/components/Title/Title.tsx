import Image from "next/image";
import style from "./title.module.scss";
interface TitleProps {
  children: string;
  width: number;
}

const Title = ({ width, children }: TitleProps) => {
  return (
    <div className={style.box}>
      <h2 className={style.title}>{children}</h2>

      <div className={style.svg}>
        <Image
          src="/main/Rectangle.svg"
          alt="іконка вітряка"
          width={width}
          height={4}
        />
      </div>
    </div>
  );
};

export default Title;
