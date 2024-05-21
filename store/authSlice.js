// // store/auth-slice.js

// import axios from 'axios';
// import { toast } from 'react-toastify';
// const ROOT_URL =  'https://platform-api-ckeith26-withauth.onrender.com/api';

// export default function createAuthSlice(set, get) {
//   return {
//     authenticated: false,
//     loading: true,
//     loadUser: async () => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         try {
//           const response = await axios.get(`${ROOT_URL}`, {
//             headers: { 'Authorization': `Bearer ${token}` }
//           });
//           set(state => {
//             state.authSlice.authenticated = true;
//             state.authSlice.loading = false;
//           }, false, 'auth/loadUser');
//         } catch (error) {
//           console.error("Failed to load user", error);
//           localStorage.removeItem('token');
//           set(state => {
//             state.authSlice.authenticated = false;
//             state.authSlice.loading = false;
//           }, false, 'auth/loadUser');
//         }
//       } else {
//         set(state => {
//           state.authSlice.loading = false;
//         }, false, 'auth/loadUser');
//       }
//     },
//     signinUser: async (fields, navigate) => {
//       // sign in user
//       // takes in an object with email and password (minimal user object)
//       // does an axios.post on the /signin endpoint and passes in { email, password}
//       // on success does:
//       //  sets authSlice authenticated state to 'true'
//       //  localStorage.setItem('token', response.data.token);
//       //  navigates to the home page ('/')
//       // on error does:
//       //  set error in error slice: get().errorSlice.newError(`Sign In Failed: ${error}`);

//       try {
//         if (fields.email === '' || fields.password === '') {
//           get().errorSlice.newError('Sign In Failed: Email and Password Required');
//           toast.error('Error Notification ! Email and Password Required', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//           return;
//         }

//         const response = await axios.post(`${ROOT_URL}/signin`, fields);
//         await set(({ authSlice }) => { authSlice.authenticated = true; }, false, '/signin');
//         localStorage.setItem('token', response.data.token);
//         navigate('/');
//       } catch (error) {
//         get().errorSlice.newError('Sign In Failed: ' + error.message);
//         toast.error('Error Notification !' + error.message, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     },
//     signupUser: async (fields, navigate) => {
//       // sign up user
//       // takes in an object with email and password (minimal user object)
//       // does an axios.post on the /signup endpoint (only difference from above)
//       // on success does:
//       //  sets authSlice authenticated state to 'true'
//       //  localStorage.setItem('token', response.data.token);
//       // on error does:
//       //  set error in error slice: get().errorSlice.newError(`Sign Up Failed: ${error}`);
//       try {
//         if (!fields.email || !fields.password) {
//           get().errorSlice.newError('Sign Up Failed: Email and Password Required');
//           toast.error('Error Notification ! Email and Password Required', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//           return;
//         }

//         const response = await axios.post(`${ROOT_URL}/signup`, fields);
//         await set(({ authSlice }) => { authSlice.authenticated = true; }, false, '/signup');
//         localStorage.setItem('token', response.data.token);
//         navigate('/');
//       } catch (error) {
//         get().errorSlice.newError('Sign In Failed: ' + error.message);
//         toast.error('Error Notification !' + error.message, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     },
//     signoutUser: async (navigate) => {
//       // sign out user
//       // deletes token from localstorage
//       // and deauths user
//       // sets authSlice authenticated state to 'false'
//       try {
//         const user = localStorage.getItem('token');
//         await axios.post(`${ROOT_URL}/signout`, user);
//         await set(({ authSlice }) => { authSlice.authenticated = false; }, false, 'posts/signout');
//         localStorage.removeItem('token');
//         navigate('/signin');
//       } catch (error) {
//         get().errorSlice.newError('Sign In Failed: ' + error.message);
//         toast.error('Error Notification !' + error.message, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     },
//   };
// }
