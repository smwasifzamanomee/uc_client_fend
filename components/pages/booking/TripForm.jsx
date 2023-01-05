import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import {  useEffect, useRef, useState } from "react";
import AutoCompleteSearch from "../../UI/AutoCompleteSearch";
import Button from "../../UI/Button";
import {useDispatch, useSelector,} from 'react-redux'

const TripForm = () => {

  // const {stops} = useSelector(state => state?.trip);
  // const dispatch  = useDispatch();
  // // console.log('stops',));
  

  const [value, setValue] = useState("Distance");
  const [tripInfo, setTripInfo] = useState({});
  const pickupRef = useRef(null);
  const dropoffRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("distance-trips-details");
    if (data !== null && data !== "undefined") {
      setTripInfo(JSON.parse(data));
    }
  }, []);

  const addressToLatLng = (address) => {
    const fun = async (address) => {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
      return await axios.get(url);
    };
    const { data } = useQuery({
      queryKey: ["lat-lng", address],
      queryFn: () => fun(address),
      // refetchInterval: 1000,
    });

    return data?.data?.results[0]?.geometry?.location;
  };

 

  console.log("Printing ",tripInfo);
  // handle Blur
  const handleBlur = (ref) => {
    const location_name = { ...tripInfo };
    location_name[ref.current?.name] = ref.current?.value;
    setTripInfo(location_name);
  };


  const pickup = addressToLatLng(tripInfo?.pickup_location_name);
  useEffect(() => {
    if(pickup){
      setTripInfo({
        ...tripInfo,
        ["pickup_location"]: `${pickup?.lat}, ${pickup?.lng}`,
      });
    }
  }, [pickup])

 const dropoff = addressToLatLng(tripInfo?.drop_off_location_name);
  useEffect(() => {
    if(dropoff){
      setTripInfo({
        ...tripInfo,
        ["drop_off_location"]: `${dropoff?.lat}, ${dropoff?.lng}`,
      });
    }
  }, [dropoff])



  const handleOnChange = () => {

    if (
      tripInfo?.pickup_location_name &&
      tripInfo?.drop_off_location_name &&
      tripInfo?.pickup_location &&
      tripInfo?.drop_off_location &&
      tripInfo?.date &&
      tripInfo?.pickup_time &&
      tripInfo?.booking_method
    ) {
      localStorage.setItem("distance-trips-details", JSON.stringify(tripInfo));
      router.push(
        {
          pathname: `/booking/second-step`,
          query: { method: value },
        },
        "/booking/second-step",
        { shallow: true }
      );
    }
    else{
      alert("fillup all field!")
    }
  };


  return (
    <div
      onSubmit={handleOnChange}
      className="flex flex-col lg:w-[420px] h-[500px] pb-4 rounded  gap-y-3 text-gray-600 bg-gray-900 "
    >
      {/* Method */}
      <div className="flex gap-x-1 items-center justify-between border-b border-gray-500 mb-6 cursor-pointer">
        <span
          onClick={() => setValue("Distance")}
          className={`${
            value === "Distance" && "bg-primary"
          } inline-block text-center w-full text-light py-5 `}
        >
          Distance
        </span>
        <span
          onClick={() => setValue("Hourly")}
          className={`${
            value === "Hourly" && "bg-primary"
          } inline-block text-center w-full text-light py-5`}
        >
          Hourly
        </span>
      </div>

      {/* Distance input form */}
      <div className="active px-4 flex flex-col gap-y-3">
        <AutoCompleteSearch>
          <input
            type="text"
            name="pickup_location_name"
            placeholder="Pick up Location"
            className="w-full"
            defaultValue={tripInfo?.pickup_location_name}
            ref={pickupRef}
            onBlur={() => handleBlur(pickupRef)}
            required
          />
        </AutoCompleteSearch>

        {value?.includes("Distance") && (
          <>
            <AutoCompleteSearch>
              <input
                type="text"
                name="drop_off_location_name"
                placeholder="Drop off Location"
                className="w-full"
                defaultValue={tripInfo?.drop_off_location_name}
                ref={dropoffRef}
                onBlur={() => handleBlur(dropoffRef)}
                required
              />
            </AutoCompleteSearch>
            <select
              required
              name="booking_method"
              onChange={(e) =>
                setTripInfo({ ...tripInfo, [e.target.name]: e.target.value })
              }
              defaultValue={tripInfo?.booking_method}
              className=" outline-none border-none"
            >
              <option value="One Way">One Way</option>
              <option value="Two Way">Two Way</option>
            </select>
          </>
        )}

        {/* date selection section */}
        <input
          type="date"
          name="date"
          placeholder="yyyy/mm/dd"
          className="w-full"
          defaultValue={tripInfo?.date}
          onChange={(e) =>
            setTripInfo({ ...tripInfo, [e.target.name]: e.target.value })
          }
          required
        />

        {/* time input field  */}
        <div className="flex items-center gap-x-2">
          <p className="text-light">Pick Up Time</p>
          <input
            type="time"
            name="pickup_time"
            className="flex-1"
            defaultValue={tripInfo?.pickup_time}
            onChange={(e) =>
              setTripInfo({ ...tripInfo, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
        <Button onClick={handleOnChange} className="mt-4 text-light">
          Reserve Now
        </Button>
      </div>
    </div>
  );
};

export default TripForm;
