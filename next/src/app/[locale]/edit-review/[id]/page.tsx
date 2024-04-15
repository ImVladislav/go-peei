import { getDataId } from "../../../../../libs/getData";

import Title from "../../components/Title/Title";
import Translator from "../../components/translator/Translator";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

import { reviewsItem } from "@/app/types";

import styles from "./editReview.module.scss";

const EditReviewPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const data: reviewsItem = await getDataId("reviews", id);

  return (
    <div className="container">
      <div className={styles.wrap}>
        <div>
          <Title>
            <Translator>contactUs</Translator>
          </Title>
        </div>
        <ReviewForm data={data} />
      </div>
    </div>
  );
};

export default EditReviewPage;
