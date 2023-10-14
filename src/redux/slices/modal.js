// Redux
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    message: '',
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
      state.message = action.payload;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice;
