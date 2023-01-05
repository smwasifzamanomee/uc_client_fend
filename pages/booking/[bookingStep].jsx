import React from "react";
import PaymentDetails from "../../components/pages/booking/PaymentDetails";
import VehicleSelect from "../../components/pages/booking/VehicleSelect";
import UcHeader from "../../components/UI/UcHeader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import HorizontalLayout from "../../layout/HorizontalLayout";
import VerticalLayout from "../../layout/VerticalLayout";

const index = ({ step }) => {
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: async () =>
      await axios.get("http://localhost:4000/api/auth/session"),
  });

  if (isLoading) return <div>Loading..</div>;

  return (
    <>
      <HorizontalLayout>
        <UcHeader title={"Booking"} path={"Home / Booking"} />
        <div className=" w-full flex justify-center items-center mt-12">
          <div className={"flex items-center"}>
            <span
              className={`bg-primary text-light w-12 h-12 rounded-full  font-bold flex items-center justify-center`}
            >
              1
            </span>
            <span className="inline-block w-[140px] h-[1px] bg-black"></span>
          </div>

          <div className={"flex items-center"}>
            <span
              className={`bg-primary text-light w-12 h-12 rounded-full  font-bold flex items-center justify-center`}
            >
              2
            </span>
            <span className="inline-block w-[140px] h-[1px] bg-black"></span>
          </div>

          <div className={"flex items-center"}>
            <span
              className={`bg-primary text-light w-12 h-12 rounded-full  font-bold flex items-center justify-center`}
            >
              3
            </span>
          </div>
        </div>

        {step?.includes("second-step") && (
          <VehicleSelect
            accessToken={data.data?.accessToken}
            method={router.query?.method}
          />
        )}
        {step?.includes("third-step") && (
          <PaymentDetails accessToken={data.data?.accessToken} />
        )}
      </HorizontalLayout>
      <VerticalLayout>
        <UcHeader title={"Booking"} path={"Home / Booking"} />
        <div className=" w-full flex justify-center items-center mt-12">
          <div className={"flex items-center"}>
            <span
              className={`bg-primary text-light w-12 h-12 rounded-full  font-bold flex items-center justify-center`}
            >
              1
            </span>
            <span className="inline-block w-[140px] h-[1px] bg-black"></span>
          </div>

          <div className={"flex items-center"}>
            <span
              className={`bg-primary text-light w-12 h-12 rounded-full  font-bold flex items-center justify-center`}
            >
              2
            </span>
            <span className="inline-block w-[140px] h-[1px] bg-black"></span>
          </div>

          <div className={"flex items-center"}>
            <span
              className={`bg-primary text-light w-12 h-12 rounded-full  font-bold flex items-center justify-center`}
            >
              3
            </span>
          </div>
        </div>

        {step?.includes("second-step") && (
          <VehicleSelect
            accessToken={data.data?.accessToken}
            method={router.query?.method}
          />
        )}
        {step?.includes("third-step") && (
          <PaymentDetails accessToken={data.data?.accessToken} />
        )}
      </VerticalLayout>
    </>
  );
};

export default index;

export const getServerSideProps = ({ params }) => {
  return {
    props: {
      step: params?.bookingStep,
    },
  };
};
