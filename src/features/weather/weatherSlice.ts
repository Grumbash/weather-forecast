import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface State {
  now: number;
}

const initialState = {
  now: null
}

// export const incrementAsync = createAsyncThunk(
//   'weather/fetchWeather',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  // extraReducers:(builder) => {
  //   builder.addCase()
  // },
  reducers: {
    addNow: (state)=> {}
  }
});

export default weatherSlice.reducer
