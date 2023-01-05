import { useContext } from "react";
import { FormContext } from "../../../context/MultiStepFormContext";
import Container from "../../../utils/container";
import TripForm from "./TripForm";
import TripInfo from "./TripInfo";


const TripDetails = () => {
  return (
    <Container>
      <div className="flex justify-around items-center gap-10 ">
       <TripForm />
       <TripInfo />
      </div>
    </Container>
  );
};

export default TripDetails;
