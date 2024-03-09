import styles from "./button.module.scss";

interface ButtonProps {
  newStyles?: string;
  children: string;
}

const Button = ({ newStyles, children }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${newStyles}`}>{children}</button>
  );
};

export default Button;
