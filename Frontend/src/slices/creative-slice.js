import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import creativeService from '../services/creative-service';

//getContents
export const getCreatives = createAsyncThunk(
  'creatives/get',
  async thunkAPI => {
    try {
      const userId = thunkAPI.getState().auth.user.id;
      return await creativeService.getContent(userId);
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

export const { resetData } = creativeSlice.actions;
export default creativeSlice.reducer;
