"use client";
import { useState } from "react";
import Image from "next/image";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

import { addData } from "../../../../libs/getData";

import Translator from "../components/translator/Translator";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";

import styles from "./contact.module.scss";
import {
  CustomErrorMessage,
  CustomSuccessMessage,
} from "../components/CustomMessage/CustomMessage";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const FormComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { t } = useTranslation();

  const formValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(
        /^[A-Za-zА-Яа-яЇїІіЄєҐґ\s'-]+$/,
        `${t("messageErrorNameInvalid")}`
      )
      .trim()
      .min(2, `${t("messageErrorNameTooShort")}`)
      .max(60, `${t("messageErrorNameTooLong")}`)
      .required(`${t("messageErrorName")}`),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        `${t("emailAddressFormatIsIncorrect")}`
      )
      .trim()
      .email(`${t("emailAddressFormatIsIncorrect")}`)
      .min(9, `${t("messageErrorEmaileTooShort")}`)
      .max(128, `${t("messageErrorEmailTooLong")}`)
      .required(`${t("messageErrorEmail")}`)
      .test(
        "no-leading-dot",
        `${t("emailAddressFormatIsIncorrect")}`,
        (value) => (value ? !/^\./.test(value.split("@")[0]) : true)
      ),
    message: Yup.string()
      .trim()
      .min(7, `${t("messageErrorMessageTooShort")}`)
      .max(500, `${t("messageErrorMessageTooLong")}`)
      .required(`${t("messagePlaceholder")}`),
  });

  const handleFormSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    const { name, email, message } = values;

    try {
      await addData("reviews", {
        imageSrc: "/main/avatar/noavatar.png",
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      setModalMessage(`${t("successMessage")}`);
    } catch (error) {
      setModalMessage(`${t("warningMessage")}`);
    } finally {
      setIsModalOpen(true);
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched, values }) => (
          <Form className={styles.form}>
            <label className={styles.label}>
              <Translator>fullName</Translator>
              <Field
                className={`${styles.input} ${
                  errors.name && touched.name ? styles.error : ""
                }`}
                type="text"
                name="name"
                placeholder={t("fullName")}
              />
              <ErrorMessage name="name">
                {(msg) => <CustomErrorMessage message={msg} />}
              </ErrorMessage>
              {!errors.name && touched.name && values.name && (
                <CustomSuccessMessage message={t("messageSuccessName")} />
              )}
            </label>
            <label className={styles.label}>
              <Translator>email</Translator>
              <Field
                className={`${styles.input} ${
                  errors.email && touched.email ? styles.error : ""
                }`}
                type="email"
                name="email"
                placeholder={t("email")}
              />
              <ErrorMessage name="email">
                {(msg) => <CustomErrorMessage message={msg} />}
              </ErrorMessage>
              {!errors.email && touched.email && values.email && (
                <CustomSuccessMessage message={t("messageSuccessEmail")} />
              )}
            </label>
            <label className={styles.label}>
              <Translator>message</Translator>
              <Field
                className={`${styles.textarea} ${
                  errors.message && touched.message ? styles.error : ""
                }`}
                as="textarea"
                name="message"
                cols={20}
                rows={10}
                placeholder={t("messagePlaceholder")}
              />

              <ErrorMessage name="message">
                {(msg) => <CustomErrorMessage message={msg} />}
              </ErrorMessage>
              {!errors.message && touched.message && values.message && (
                <CustomSuccessMessage message={t("messageSuccessMessage")} />
              )}
            </label>
            <div className={styles.btnContainer}>
              <Button typeBtn="submit" newStyles={styles.btn}>
                <Translator>send</Translator>
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      {/* modal */}
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} message>
        <div className={styles.wrapModalMessage}>
          {modalMessage === `${t("successMessage")}` ? (
            <>
              <Image
                src="/message/success-message.svg"
                width={60}
                height={60}
                alt="message"
              />
              <p className={styles.success}>{modalMessage}</p>
            </>
          ) : (
            <>
              <Image
                src="/message/warning-message.svg"
                width={60}
                height={60}
                alt="message"
              />
              <p className={styles.warning}>{modalMessage}</p>
            </>
          )}
        </div>
      </Modal>
    </>
    // <form action="" className={styles.form}>
    //   <label>
    //     <Translator>fullName</Translator>
    //     <input type="text" name="name" placeholder={t("fullName")} />
    //   </label>
    //   <label>
    //     <Translator>email</Translator>
    //     <input type="email" name="email" placeholder={t("email")} />
    //   </label>
    //   <label htmlFor="message">
    //     <Translator>message</Translator>
    //     <textarea
    //       name="message"
    //       id="message"
    //       placeholder={t("messagePlaceholder")}
    //       //   cols="10"
    //       //   rows="6"
    //     ></textarea>
    //   </label>
    //   <Button typeBtn="submit" newStyles={styles.btn}>
    //     <Translator>send</Translator>
    //   </Button>
    // </form>
  );
};

export default FormComponent;
