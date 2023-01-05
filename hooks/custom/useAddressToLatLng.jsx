// import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseAddressToLatLng = (address) => {
  const fun = async (address) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    return await axios.get(url);
  };


 const data =  fun(address)
  // const { data } = useQuery({
  //   queryKey: ["lat-lng", address],
  //   queryFn: () =>  fun(address),
  //   // refetchInterval: 2000,
  // });

  return data?.data?.results[0]?.geometry?.location;
}

export default UseAddressToLatLng