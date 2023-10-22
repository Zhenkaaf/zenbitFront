import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAct = createAsyncThunk(
  "auth/loginAct",
  async (authData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://upset-pink-hem.cyclic.app/auth/login",
        /* "http://localhost:8001/auth/login", */
        authData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerAct = createAsyncThunk(
  "auth/registerAct",
  async (authData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://upset-pink-hem.cyclic.app/auth/register",
        /* "http://localhost:8001/auth/register", */
        authData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    loginError: false,
    registerError: false,
  },
  reducers: {
    signOutAct: (state, action) => {
      state.user = null;
    },
    setLoadingAct: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAct.pending, (state) => {
        state.isLoading = true;
        state.loginError = null;
      })
      .addCase(loginAct.fulfilled, (state, action) => {
        state.user = action.payload.userEmail;
        state.isLoading = false;
        state.loginError = null;
      })
      .addCase(loginAct.rejected, (state, action) => {
        state.isLoading = false;
        state.loginError = true;
        /*  console.log(action.payload.response.status);
        if (action.payload.response.status === 400) {
          state.wrongAuthData = action.payload.response.data;
        } */
      })
      .addCase(registerAct.pending, (state) => {
        state.isLoading = true;
        state.registerError = null;
      })
      .addCase(registerAct.fulfilled, (state, action) => {
        state.user = action.payload.userEmail;
        state.isLoading = false;
        state.registerError = null;
      })
      .addCase(registerAct.rejected, (state, action) => {
        state.isLoading = false;
        state.registerError = true;
      });
  },
});

export const { signOutAct, setLoadingAct } = authSlice.actions;
export default authSlice.reducer;
