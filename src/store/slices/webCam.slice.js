import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const detectFace = createAsyncThunk(
  "face/detectFace",
  async (imageSrc, { rejectWithValue }) => {
    
    try {
      const response = await axios.post("http://localhost:8080/api/face-detect", {
        image: imageSrc,
      });
      console.log("Backend Response:", response.data); 
      return response.data;
    } catch (error) {
      console.error("Error detecting face:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const faceSlice = createSlice({
  name: "face",
  initialState: {
    faceData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(detectFace.pending, (state) => {
        state.loading = true;
      })
      .addCase(detectFace.fulfilled, (state, action) => {
        state.loading = false;
        state.faceData = action.payload;
      })
      .addCase(detectFace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default faceSlice.reducer;
