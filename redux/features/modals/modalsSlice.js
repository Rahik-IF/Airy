// modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaysoOpen: false,
  isLockFundOpen: false,
  isLiveChatOpen: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    //for sayso modal
    openSaysoModal: (state) => {
      state.isSaysoOpen = true;
    },
    closeSaysoModal: (state) => {
      state.isSaysoOpen = false;
    },
    //for lock fund modal
    openLockFundModal: (state) => {
      state.isLockFundOpen = true;
    },
    closeLockFundModal: (state) => {
      state.isLockFundOpen = false;
    },
    //for live chat modal
    openLiveChatModal: (state) => {
      state.isLiveChatOpen = true;
    },
    closeLiveChatModal: (state) => {
      state.isLiveChatOpen = false;
    },
  },
});

export const {
  openSaysoModal,
  closeSaysoModal,
  openLockFundModal,
  closeLockFundModal,
  openLiveChatModal,
  closeLiveChatModal
} = modalSlice.actions;
export default modalSlice.reducer;
