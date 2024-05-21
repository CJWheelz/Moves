import axios from 'axios';
import { toast } from 'react-toastify';

const ROOT_URL = 'https://project-api-moody-moves.onrender.com/api';
const API_KEY = '';

export default function createMoveSlice(set, get) {
    return {
      user: String,
      moveId: String,
      questionId: String,
      response: Boolean,
      code: Number,
      
      joinMove: async () => {
        try {
          const response = await axios.post(`${ROOT_URL}/create`, code, {
            moveId: get().moveSlice.moveId,
            user: get().authSlice.user,
          });
          set (state => {
            state.moveSlice.questionId = response.data.questionId;
          });
        } catch (error) {
          get().errorSlice.newError(`Join Move Failed: ${error}`);
        }
      },
    }
  }
  