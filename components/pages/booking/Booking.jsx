import { useMultiStepForm } from "../../../hooks/custom/useMultiStepForm";
import Button from "../../UI/Button";
import UcHeader from "../../UI/UcHeader";
import PaymentDetails from "./PaymentDetails";
import TripDetails from "./TripDetails";
import VehicleSelect from "./VehicleSelect";



const Booking = () => {

  const { step, currentIndex, steps, next, back, isFristStep, isLastStep } =
    useMultiStepForm([
      <TripDetails  />,
      <VehicleSelect  />,
      <PaymentDetails  />,
    ]);


  return (
    <>
      <UcHeader title={"Booking"} path={"Home / Booking"} />
      <div className=" w-full flex justify-center items-center mt-12">
        <div className={"flex items-center"}>
          <span
            className={`${
              currentIndex === 0
                ? "bg-primary text-light"
                : "bg-gray-500 text-light"
            } w-12 h-12 rounded-full  font-bold flex items-center justify-center`}
          >
            1{" "}
          </span>
          <span className="inline-block w-[140px] h-[1px] bg-black"></span>
        </div>

        <div className={"flex items-center"}>
          <span
            className={`${
              currentIndex === 1
                ? "bg-primary text-light"
                : "bg-gray-500 text-light"
            } w-12 h-12 rounded-full  font-bold flex items-center justify-center`}
          >
            2
          </span>
          <span className="inline-block w-[140px] h-[1px] bg-black"></span>
        </div>

        <div className={"flex items-center"}>
          <span
            className={`${
              currentIndex === 2
                ? "bg-primary text-light"
                : "bg-gray-500 text-light"
            } w-12 h-12 rounded-full  font-bold flex items-center justify-center`}
          >
            3
          </span>
          <span className="inline-block w-[140px] h-[1px] bg-black"></span>
        </div>

        <div className={"flex items-center"}>
          <span
            className={`${
              currentIndex === 3
                ? "bg-primary text-light"
                : "bg-gray-500 text-light"
            } w-12 h-12 rounded-full  font-bold flex items-center justify-center`}
          >
            4
          </span>
        </div>
      </div>
      {step}
      <div className="text-center">
        {!isFristStep && <Button width={"w-[200px] text-light"} onClick={back}>back</Button>}
        <Button width={"w-[200px] text-light"} onClick={next}>{isLastStep ? "Pay" : "Next"}</Button>
      </div>
    </>
  );
};

export default Booking;
