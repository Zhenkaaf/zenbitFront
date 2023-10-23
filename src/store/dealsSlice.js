import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDealsAct = createAsyncThunk(
  "deals/getDealsAct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://upset-pink-hem.cyclic.app/deal/alldeals"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const dealsSlice = createSlice({
  name: "deals",
  initialState: {
    deals: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDealsAct.pending, (state) => {})
      .addCase(getDealsAct.fulfilled, (state, action) => {
        state.deals = action.payload;
      })
      .addCase(getDealsAct.rejected, (state, action) => {});
  },
});

export const {} = dealsSlice.actions;
export default dealsSlice.reducer;
