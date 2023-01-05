import { createSlice } from "@reduxjs/toolkit";

 const tripSlice = createSlice({
  name: "trip",
  initialState: {
    booking_method: "",
    date: "",
    drop_off_location: "",
    drop_off_location_name: "",
    luggage_size: "",
    number_of_passengers: 1,
    pickup_location: "",
    pickup_location_name: "",
    pickup_time: "",
    stops: [{ location: "" }],
    vehicle_type: "",
  },
  reducers: {}
});

export default tripSlice.reducer;