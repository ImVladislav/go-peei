import Link from "next/link";
import styles from "./button.module.scss";

interface ButtonProps {
  newStyles?: string;
  typeBtn?: "button" | "submit" | "reset";
  children: string;
  onClick?: () => void;
  isLink?: boolean;
  href?: string;
}

const Button = ({
  typeBtn = "button",
  newStyles,
  onClick,
  isLink = false,
  href = "#",
  children,
}: ButtonProps) => {
  const buttonClass = newStyles
    ? `${styles.button} ${newStyles}`
    : styles.button;

  const buttonElement = (
    <button type={typeBtn} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );

  if (isLink) {
    return <Link href={href}>{buttonElement}</Link>;
  }

  return buttonElement;
};

export default Button;
