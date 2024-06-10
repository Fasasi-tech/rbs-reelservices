import {createSlice} from '@reduxjs/toolkit';

// const initialState= {
//     userInfo: typeof localStorage !=='undefined' && localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null
// }

// const authSlice = createSlice({
//     name:'auth',
//     initialState,
//     reducers:{
//         setCredentials: (state, action)=> {
//             state.userInfo = action.payload;
//             if (typeof localStorage !== 'undefined'){
//                 localStorage.setItem('userInfo', JSON.stringify(action.payload))
//             }
            
//         },
//         logout: (state, action) => {
//             state.userInfo = null;
//             if (typeof localStorage !== 'undefined'){
//                 localStorage.removeItem('userInfo')
//             }
          
//         }
//     }
// })

// export const {setCredentials, logout} = authSlice.actions;

// export default authSlice.reducer;

// const initialState = {
//     isAuthenticated: false,
//     user: null,
//     accessToken: null,
//   };

//   const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//       setAuthState: (state, action) => {
//         state.isAuthenticated = action.payload.isAuthenticated;
//         state.user = action.payload.user;
//         state.accessToken = action.payload.accessToken;
//         state.user.tenantProfiles = Array.from(state.user.tenantProfiles);
//       },
//       logout: (state) => {
//         state.isAuthenticated = false;
//         state.user = null;
//         state.accessToken = null;
//       },
//     },
//   });
  
//   export const { setAuthState, logout } = authSlice.actions;
//   export default authSlice.reducer;
import Cookies from 'js-cookie';

const initialState = {
  isAuthenticated: false,
  user: typeof window !== 'undefined' && localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  accessToken: typeof window !== 'undefined' && localStorage.getItem('accessToken') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      if (action.payload.user) {
        state.user.tenantProfiles = Array.from(action.payload.user.tenantProfiles);
      }

       // Save to localStorage
    
       if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('accessToken', action.payload.accessToken);
      }
    
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;

        if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
      }
    },
  },
});

export const { setAuthState, logout } = authSlice.actions;
export default authSlice.reducer;