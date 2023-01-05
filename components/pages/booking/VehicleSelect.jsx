import React, { useContext, useEffect, useRef, useState } from "react";
import { ourfleetdata } from "../../../data/data";
import Container from "../../../utils/container";
import { BsFillBagCheckFill } from "react-icons/bs";
import {  FaUsers } from "react-icons/fa";
import Button from "../../UI/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import useTripRequest from "../../../hooks/custom/useTripRequest";
import StopSearchBar from "./StopSearchBar";

const VehicleSelect = ({ accessToken, method }) => {
  const [tripInfo, setTripInfo] = useState({});
  const [temp, setTemp] = useState({});
  const luggageRef = useRef('');
  const vehicleRef = useRef('');
  const passengersRef = useRef('');

  
  const [stopsValue, setStopsValue] = useState([{ location: "" }]);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("distance-trips-details");
    if (data !== null && data !== "undefined") {
      setTripInfo(JSON.parse(data));
    }
  }, []);


  useEffect(() => {
    setTemp({ ...temp, ["stops"]: stopsValue });
  }, [stopsValue]);


  useEffect(() => {
    setTemp({
      number_of_passengers: Number(passengersRef.current.value),
      luggage_size: luggageRef.current.value,
      vehicle_type: vehicleRef.current.value
    })

  },[])


  const {mutate } = useTripRequest(accessToken);

  const handleOnSubmit = () => {

    if (temp?.vehicle_type && temp?.number_of_passengers && temp?.luggage_size) {
      mutate({...tripInfo, ...temp});
    }
    else{
      alert('fillup all field!')
    }
  };

  console.log(temp);

  return (
    <Container>
      <div className="sm:flex justify-between gap-10 w-[1100px] mx-auto">
        {/* Vehicle type */}
        <div className="w-[350px] h-[600px] overflow-y-scroll">
          {ourfleetdata.slice(0, 6).map((fleet) => (
            <div
              key={fleet.id}
              className="w-full border cursor-pointer flex justify-between items-center px-4 py-10 mb-8 rounded"
              onClick={() => setVehicleType(fleet?.name)}
            >
              {/* Vehicle title and price */}
              <div>
                <h4 className=" capitalize font-medium">{fleet.name}</h4>
                <span className="text-primary">${fleet.price}</span>
              </div>
              {/* Vehicle img */}
              <div className="w-[140px] h-[100px] relative">
                <Image
                  src={fleet.img}
                  fill
                  className=" object-contain"
                  alt="fleet"
                />
              </div>
              {/* Bag and Passenger info */}
              <div>
                <p className="flex items-center gap-x-2">
                  <BsFillBagCheckFill className="text-primary" />
                  {fleet.bags}
                </p>
                <p className="flex items-center gap-x-2">
                  <FaUsers className="text-primary" />
                  {fleet.passengers}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black w-[600px] text-light p-6">
          <h1>Trip Details</h1>
          <span className="inline-block w-[70px] h-[3px] bg-primary"></span>
          <div className="flex items-center justify-between my-8">
            <div className="w-[230px]">
              <p className="text-gray-600 py-4 border-b border-gray-600 flex justify-between items-center">
                Service Type :
                <span className="text-light">{tripInfo?.booking_method}</span>
              </p>
              <p className="text-gray-600 py-4 border-b border-gray-600 flex justify-between items-center">
                From :
                <span className="text-light">
                  {tripInfo?.pickup_location_name}
                </span>
              </p>

              <p className="text-gray-600 py-4 border-b border-gray-600 flex justify-between items-center">
                To :
                <span className="text-light">
                  {tripInfo?.drop_off_location_name}
                </span>
              </p>

              <p className="text-gray-600 py-4 border-b border-gray-600 flex justify-between items-center">
                Return :
                <span className="text-light">
                  {tripInfo?.booking_method?.toLowerCase().includes("two way")
                    ? "True"
                    : "False"}
                </span>
              </p>
            </div>
            <div className="w-[240px] p-8 border border-gray-500">
              <p className="text-gray-600 py-2">
                Date: <br />
                <span className="text-light">{tripInfo?.date}</span>
              </p>
              <p className="text-gray-600 py-2">
                Pick Up Time: <br />
                <span className="text-light">{tripInfo?.pickup_time}</span>
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4  my-4 text-black">
            <div className="flex flex-col gap-y-2 flex-1">
              <label className="text-gray-600" htmlFor="number_of_passengers">
                Number Of Passengers
              </label>
              {/* <input
                type="number"
                max={4}
                value={passengersRef?.number_of_passengers}
                name="number_of_passengers"
                onChange={(e) =>
                  setTemp({
                    ...temp,
                    [e.target.name]: Number(e.target.value),
                  })
                }
                className="w-full"
              /> */}
                <select
                name="number_of_passengers"
                value={temp?.number_of_passengers}
                ref={passengersRef}
                onChange={(e) =>
                  setTemp({
                    ...temp,
                    [e.target.name]: Number(e.target.value),
                  })
                }
                className="w-full"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
              <label className="text-gray-600" htmlFor="vehicle_type">
                Vehicle Type
              </label>

              <select
                name="vehicle_type"
                value={temp?.vehicle_type}
                ref={vehicleRef}
                onChange={(e) =>
                  setTemp({
                    ...temp,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full"
              >
                <option value="Xl Lux">Xl Lux</option>
                <option value="Lux">Lux</option>
                <option value="Executive">Executive</option>
                <option value="Xl Eco">Xl Eco</option>
                <option value="X Eco">X Eco</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 my-4 flex-wrap">
            <div className="flex flex-col gap-y-2 flex-1">
              <label className="text-gray-600" htmlFor="luggage size">
                Luggage Size
              </label>
              <select
                value={temp?.luggage_size}
                ref={luggageRef}
                onChange={e => setTemp({
                  ...temp,
                  [e.target.name]: e.target.value
                })}
                name="luggage_size"
                className="text-black w-full"
              >
                <option value="Large">Large</option>
                <option value="Medium">Medium</option>
                <option value="Small">Small</option>
              </select>
            </div>

            <StopSearchBar
              stopsValue={stopsValue}
              setStopsValue={setStopsValue}
            />
          </div>
          <div className="flex items-center justify-center gap-x-6 py-4">
            <Button type={"button"} onClick={() => router.back()}>
              Previuos
            </Button>
            <Button onClick={handleOnSubmit}>Confirm & Pay</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VehicleSelect;
