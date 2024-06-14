import Link from "next/link";
import styles from "./button.module.scss";

interface ButtonProps {
  newStyles?: string;
  typeBtn?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  isLink?: boolean;
  href?: string;
  closed?: boolean;
}

const Button = ({
  typeBtn = "button",
  disabled,
  newStyles,
  onClick,
  isLink = false,
  href = "#",
  children,
  closed,
}: ButtonProps) => {
  const buttonClass = newStyles
    ? `${styles.button} ${newStyles}`
    : styles.button;

  const buttonElement = (
    <button
      type={typeBtn}
      disabled={disabled}
      className={closed ? ` ${buttonClass} ${styles.closed}` : buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (isLink) {
    return <Link href={href}>{buttonElement}</Link>;
  }

  return buttonElement;
};

export default Button;
