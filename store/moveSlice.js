import axios from 'axios';
import { toast } from 'react-toastify';

const ROOT_URL = 'https://project-api-moody-moves.onrender.com';
const API_KEY = '';

export default function moveSlice(set, get) {
    return {
      all: [],
      current: {},

      // a slice action to fetch a singular post
      fetchPost: async (id) => {
        try {
          const response = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
          set(({ postSlice }) => { postSlice.current = response.data; }, false, 'posts/fetchPost');
        } catch (error) {
          get().errorSlice.newError(error.message);
          toast.error('Error Notification !' + error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      },
      fetchAllPosts: async () => {
        try {
          const response = await axios.get(`${ROOT_URL}/posts${API_KEY}`);
          const postIds = response.data.map((post) => post.id);
      
          const posts = await Promise.all(
            postIds.map(async (id) => {
              const postResponse = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
              return postResponse.data;
            })
          );
          set(({ postSlice }) => { postSlice.all = posts; }, false, 'posts/fetchAllPosts');
        } catch (error) {
          get().errorSlice.newError(error.message);
          toast.error('Error Notification ! : ' + error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      },
      
      updatePost: async (post) => {
        // PUT
        // takes in updated data (could include the ID of the post to update in the post object or add a separate parameter
        try {
          const response = await axios.put(`${ROOT_URL}/posts/${post.id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
          set(({ postSlice }) => { postSlice.current = response.data; }, false, 'posts/updatePost');
        } catch (error) {
          get().errorSlice.newError(error.message);
          toast.error('Error Notification ! : ' + error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      },
      createPost: async (post) => {
      // POST
      // takes in new post data (no id)
        try {
          const response = await axios.post(`${ROOT_URL}/posts/${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
          set(({ postSlice }) => { postSlice.current = response.data; }, false, 'posts/createPost');
        } catch (error) {
          get().errorSlice.newError(error.message);
          toast.error('Error Notification ! : ' + error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      },
      deletePost: async (id) => {
      // DELETE
      // takes id of the post to delete
        try {
          const response = await axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
          set(({ postSlice }) => { postSlice.current = response.data; }, false, 'posts/deletePost');
        } catch (error) {
          get().errorSlice.newError(error.message);
          toast.error('Error Notification ! : ' + error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      },
    };
  }
  