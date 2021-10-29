import { createSlice } from "@reduxjs/toolkit";

interface State {
  now: number;
}

const initialState = {
  now: null
}

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addNow: (state)=> {}
  }
});

export default weatherSlice.reducer
