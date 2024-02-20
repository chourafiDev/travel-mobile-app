import React from "react";
import UploadImages from "./UploadImages";
import Information from "./Information";
import ExtraInformation from "./ExtraInformation";
import { useSelector } from "react-redux";
import Complete from "./Complete";

const StepForm = ({ destination, handleSnapPressClose, type }) => {
  const { currentStep } = useSelector((state) => state.stepper);

  const destinationImages =
    destination?.images?.map((image) => image.imageUrl) || [];

  function renderFormByStep(step) {
    switch (step) {
      case 1:
        return <UploadImages images={destinationImages} />;
      case 2:
        return (
          <Information
            title={destination?.title || ""}
            destination={destination?.destination || ""}
            description={destination?.description || ""}
          />
        );
      case 3:
        return (
          <ExtraInformation
            destinationId={destination?.id || ""}
            price={destination?.price || ""}
            duration={destination?.duration || ""}
            category={destination?.categoryId || ""}
            type={type}
          />
        );
      case 4:
        return <Complete handleSnapPressClose={handleSnapPressClose} />;

      default:
        break;
    }
  }
  return <>{renderFormByStep(currentStep)}</>;
};

export default StepForm;
