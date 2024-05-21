import axios from 'axios';

const ROOT_URL = 'https://project-api-moody-moves.onrender.com/api';
const API_KEY = '';

export default function joinMoveSlice(set, get) {
    return {
      user: String,
      moveId: String,
      questionId: String,
      response: Boolean,
      joinCode: Number,
      
      getQuestion: async () => {
        try {
          const response = await axios.get(`${ROOT_URL}/question`, {
            user: get().joinMoveSlice.user,
            moveId: get().joinMoveSlice.moveId,
          });
          set(state => {
            state.joinMoveSlice.prompt = response.data.prompt;
          });
        } catch (error) {
          alert('Get Prompt Failed: ' + error);
          get().errorSlice.newError(`Get Prompt Failed: ${error}`);
        }
      },
      submitResponse: async (response) => {
        try {
          const response = await axios.post(`${ROOT_URL}/response`, {
            user: get().joinMoveSlice.user,
            moveId: get().joinMoveSlice.moveId,
            questionId: get().joinMoveSlice.questionId,
            response: response,
          });
          
        } catch (error) {
          alert('Submit Response Failed: ' + error);
          get().errorSlice.newError(`Submit Response Failed: ${error}`);
        }
      },
      setUser : (user) => {
        set(state => {
          state.joinMoveSlice.user = user;
        });
      },
      setJoinCode: (code) => {
        set(state => {
          state.joinMoveSlice.joinCode = code;
        });
      },
      joinMove: async (code, user) => {
        try {
          const response = await axios.post(`${ROOT_URL}/create`, {
            code: get().joinMoveSlice.moveId,
            user: get().joinMoveSlice.user,
          });
          set (state => {
            state.moveSlice.questionId = response.data.questionId;
          });
        } catch (error) {
          alert('Join Move Failed: ' + error);
          get().errorSlice.newError(`Join Move Failed: ${error}`);
        }
      },
    }
  }
  