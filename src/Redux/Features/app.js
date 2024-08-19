import { createSlice } from "@reduxjs/toolkit";
import { storeDate } from "../../Date";

const initialState = {
  products: storeDate,
  amount: 0,
  total: 0,
};

const app = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default app.reducer;
