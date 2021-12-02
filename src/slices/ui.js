import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: '',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload.message;
    },
    clearError: (state) => {
      state.error = '';
    },
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { toggleLoading, setError, clearError } = uiSlice.actions;

export default uiSlice.reducer;
