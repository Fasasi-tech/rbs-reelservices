// 'use client'
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setAuthState } from '../slices/authSlice';
// const UseInitializeAuthState = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     const storedAccessToken = localStorage.getItem('accessToken');

//     if (storedUser && storedAccessToken) {
//       const user = JSON.parse(storedUser);
//       const accessToken = storedAccessToken;

//       dispatch(setAuthState({
//         isAuthenticated: true,
//         user,
//         accessToken,
//       }));
//     }
//   }, [dispatch]);
// };

// export default UseInitializeAuthState;
