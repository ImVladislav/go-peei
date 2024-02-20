import Image from "next/image";

interface TitleProps {
  title: string;
  width: number;
}

const Title: React.FC<TitleProps> = ({ title, width }) => {
  return (
    <div className="title__box">
      <h2 className="title">{title}</h2>

      <div className="title__svg">
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
