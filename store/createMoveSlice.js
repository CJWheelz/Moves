import axios from 'axios';

const ROOT_URL = 'https://project-api-moody-moves.onrender.com/api';;
const API_KEY = '';

export default function createMoveSlice(set, get) {
    return {
      creator: String,
      location: {},
      radius: Number,

      createMove: async ( navigation ) => {
        try {
          const response = await axios.post(`${ROOT_URL}/create`, {
            creator: get().authSlice.user,
            location: get().moveSlice.location,
            radius: get().moveSlice.radius,
          }); 
          navigation.navigate('startMove');
          //,{
          //   headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          // });
        } catch (error) {
          get().errorSlice.newError(`Create Move Failed: ${error}`);
        }
      },

    };
  }
  