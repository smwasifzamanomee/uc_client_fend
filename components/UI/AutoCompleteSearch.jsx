import { useLoadScript , Autocomplete} from "@react-google-maps/api";

const libraries = [process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACES];
const AutoCompleteSearch = ({ children }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Autocomplete>{children}</Autocomplete>;
};

export default AutoCompleteSearch;
