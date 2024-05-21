import axios from 'axios';

const ROOT_URL = 'https://project-api-moody-moves.onrender.com/api';;
const API_KEY = '';

export default function createMoveSlice(set, get) {
    return {
      creator: String,
      location: {},
      radius: Number,
      joinCode: Number,

      setJoinCode: (code) => {
        set(state => {
          state.createMoveSlice.joinCode = code;
        });
      },
      setCreator: (creator) => {
        set(state => {
          state.createMoveSlice.creator = creator;
        });
      },
      setLocation: (location) => {
        set(state => {
          state.createMoveSlice.location = location;
        });
      },
      setRadius: (radius) => {
        set(state => {
          state.createMoveSlice.radius = radius;
        });
      },

      createMove: async ( navigation ) => {
        try {
          const response = await axios.post(`${ROOT_URL}/create`, {
            creator: get().createMoveSlice.user,
            location: get().createMoveSlice.location,
            radius: get().createMoveSlice.radius,
          }); 
          navigation.navigate('joinMove');
          //,{
          //   headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          // });
        } catch (error) {
          alert('Create Move Failed: ' + error);
          get().errorSlice.newError(`Create Move Failed: ${error}`);
        }
      },
    };
  }
  