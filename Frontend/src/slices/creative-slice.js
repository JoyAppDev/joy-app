import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import creativeService from '../services/creative-service';

//getContents
export const getCreatives = createAsyncThunk(
  'creatives/get',
  async (id, thunkAPI) => {
    try {
      return await creativeService.getContent(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  creatives: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const creativeSlice = createSlice({
  name: 'creatives',
  initialState,
  reducers: {
    resetData: state => initialState,
    updateCreatives({ creatives }, action) {
      creatives.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCreatives.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCreatives.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.creatives = action.payload;
      })
      .addCase(getCreatives.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.creatives = [];
      });
  },
});

export const { resetData, updateCreatives } = creativeSlice.actions;
export default creativeSlice.reducer;
