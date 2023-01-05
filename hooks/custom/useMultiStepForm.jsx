import { useState } from "react";
import PaymentDetails from "../../components/pages/booking/PaymentDetails";
import TripDetails from "../../components/pages/booking/TripDetails";
import VehicleSelect from "../../components/pages/booking/VehicleSelect";

export function useMultiStepForm(steps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };
  const back = () => {
    setCurrentIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };
  const goTo = (index) => {
    setCurrentIndex(index);
  };


  return {
    currentIndex,
    step: steps[currentIndex],
    next,
    back,
    goTo,
    steps,
    isFristStep: currentIndex === 0,
    isLastStep: currentIndex === steps.length - 1,
  };
}
