"use client";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

import Translator from "../components/translator/Translator";
import Button from "../components/Button/Button";

import { addData } from "../../../../libs/getData";

import styles from "./contact.module.scss";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const FormComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const formValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(`${t("messageErrorName")}`),
    email: Yup.string()
      .email(`${t("emailAddressFormatIsIncorrect")}`)
      .required(`${t("messageErrorEmail")}`),
    message: Yup.string().required(`${t("messagePlaceholder")}`),
  });

  const handleFormSubmit = (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    addData("reviews", { imageSrc: "/main/avatar/noavatar.png", ...values });
    setSubmitting(false);
    resetForm();
    router.push("/"); //змінити на  "/"
  };
  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
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
            <ErrorMessage
              className={styles.errorMessage}
              name="name"
              component="div"
            />
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
            <ErrorMessage
              className={styles.errorMessage}
              name="email"
              component="div"
            />
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
            <ErrorMessage
              className={styles.errorMessage}
              name="message"
              component="div"
            />
          </label>
          <div className={styles.btnContainer}>
            <Button typeBtn="submit" newStyles={styles.btn}>
              <Translator>send</Translator>
            </Button>
          </div>
        </Form>
      )}
    </Formik>
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
