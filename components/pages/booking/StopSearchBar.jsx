import React,{ useRef } from "react";
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import AutoCompleteSearch from "../../UI/AutoCompleteSearch";

const StopSearchBar = ({stopsValue, setStopsValue}) => {
  const stopRef = useRef(null);

  const handleStopsRemove = (index) => {
    const stops = [...stopsValue];
    stops.splice(index, 1);
    setStopsValue(stops);
  };

  const handleBlur = (index) => {
    const stops = [...stopsValue];
    stops[index][stopRef.current?.name] = stopRef.current?.value;
    setStopsValue(stops);
  };

  // console.log(stopsValue);

  return (
    <div className="flex flex-col gap-y-2 flex-1">
      <label className="text-gray-600" htmlFor="stops">
        Stops
      </label>
      {stopsValue?.map((item, index) => (
        <div key={index} className="flex justify-between items-center gap-x-2">
          {stopsValue?.length > 1 && (
            <FaTrashAlt
              onClick={() => handleStopsRemove(index)}
              className="bg-primary w-10 h-10 p-1 rounded-sm"
            />
          )}
          <AutoCompleteSearch>
            <input
              type="text"
              ref={stopRef}
              defaultValue={item?.location}
              onBlur={() => handleBlur(index)}
              placeholder="Stops"
              name="location"
              className="w-full text-black"
            />
          </AutoCompleteSearch>
          {stopsValue?.length - 1 === index && stopsValue?.length < 5 && (
            <FaPlusCircle
              onClick={() =>
                setStopsValue((prev) => [...prev, { location: "" }])
              }
              className="bg-primary w-10 h-10 p-1 rounded-sm"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(StopSearchBar);
