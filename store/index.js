import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import postSlice from './postSlice';
import authSlice from './authSlice';

const useStore = create(devtools(immer((...args) => ({
  moveSlice: postSlice(...args),
  submissionSlice: authSlice(...args),
}))));

export default useStore;
