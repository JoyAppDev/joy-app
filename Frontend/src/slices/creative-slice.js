import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/auth-service';

//getContents
export const getCreatives = createAsyncThunk('creative/get', async thunkAPI => {
  try {
    return await authService.getContent();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  creative: null,
};

export const creativeSlice = createSlice({
  name: 'creative',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCreatives.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCreatives.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.creative = action.payload;
      })
      .addCase(getCreatives.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.creative = null;
      });
  },
});

export default creativeSlice.reducer;
