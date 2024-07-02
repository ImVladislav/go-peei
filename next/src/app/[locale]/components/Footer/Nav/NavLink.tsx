"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/app/types";
import Translator from "../../translator/Translator";

import styles from "./navFooter.module.scss";
import Modal from "../../Modal/Modal";
import { useState } from "react";
import ModalContent from "../../supportUSbtnModal/modalContent";

const NavLink = ({ item }: { item: navLinks }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const pathname = usePathname();
  const activeStyle = pathname === `/uk${item.href}` || pathname === item.href;

  const handleClick = (e: any) => {
    if (item.label === "financially") {
      e.preventDefault();
      setModalVisible(true);
    }
  };

  const handleConfirm = () => {
    setModalVisible(false);
  };
  return (
    <>
      <Link
        className={`${styles.link} ${activeStyle && styles.active}`}
        href={item.href}
        onClick={handleClick}
      >
        <Translator>{item.label}</Translator>
      </Link>
      {modalVisible && (
        <Modal
          show={modalVisible}
          onClose={() => setModalVisible(false)}
          children={<ModalContent onConfirm={handleConfirm} />}
          modalPosition={styles.modal}
        />
      )}
    </>
  );
};

export default NavLink;
