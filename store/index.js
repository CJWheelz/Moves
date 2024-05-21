import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import createMoveSlice from './createMoveSlice';
import joinMoveSlice from './joinMoveSlice';

const useStore = create(devtools(immer((...args) => ({
  createMoveSlice: createMoveSlice(...args),
  joinMoveSlice: joinMoveSlice(...args),
}))));

export default useStore;
