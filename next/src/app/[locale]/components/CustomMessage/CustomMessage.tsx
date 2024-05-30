import Image from "next/image";

import styles from "./customMessage.module.scss";

export const CustomErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className={styles.messageContainer}>
      <Image
        src="/message/Warning.svg"
        alt="Error Icon"
        width={20}
        height={20}
      />
      <span className={styles.errorMessage}>{message}</span>
    </div>
  );
};

export const CustomSuccessMessage = ({ message }: { message: string }) => {
  return (
    <div className={styles.messageContainer}>
      <Image
        src="/message/Success.svg"
        alt="Success Icon"
        width={20}
        height={20}
      />
      <span className={styles.successMessage}>{message}</span>
    </div>
  );
};
