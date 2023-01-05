import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

const useTripRequest = (accessToken) => {
  const router = useRouter();
    const tripRequest = async (tripinformation) => {
        return await axios.post(
          "http://192.168.0.249:8000/api/v2/static-trip-request/",
          tripinformation,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      };
    
    const { mutate , data,} = useMutation(tripRequest);
    console.log('data',data);
    // if(data?.status === 201){
    //   localStorage.removeItem('distance-trips-details')
    //   router.push('/')
    // }
    return { mutate}
}

export default useTripRequest