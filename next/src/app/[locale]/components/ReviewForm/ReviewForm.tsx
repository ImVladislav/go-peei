"use client";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/Button";
import Translator from "../../components/translator/Translator";

import { editDataId } from "../../../../../libs/getData";

import { reviewsItem } from "@/app/types";

import styles from "./reviewForm.module.scss";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ReviewForm = ({ data }: { data: reviewsItem }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const formValues: FormValues = {
    name: data.name,
    email: data.email,
    message: data.message,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(`${t("messageErrorName")}`),
    email: Yup.string()
      .email(`${t("emailAddressFormatIsIncorrect")}`)
      .required(`${t("messageErrorEmail")}`),
    message: Yup.string().required(`${t("messagePlaceholder")}`),
  });

  const handleFormSubmit = async (
    values: FormValues,
    {
      setSubmitting,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
    }
  ) => {
    await editDataId("reviews", data._id, values);
    router.push("/reviews");
    router.refresh();
    setSubmitting(false);
  };
  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h2 className={styles.title}>
              <Translator>writeToUs</Translator>
            </h2>

            <label className={styles.lable}>
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
            <label className={styles.lable}>
              <Translator>email</Translator>
              <Field
                className={`${styles.input} ${
                  errors.email && touched.email ? styles.error : ""
                }`}
                type="text"
                name="email"
                placeholder={t("email")}
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="email"
                component="div"
              />
            </label>
            <label className={styles.lable}>
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
    </div>
  );
};

export default ReviewForm;
