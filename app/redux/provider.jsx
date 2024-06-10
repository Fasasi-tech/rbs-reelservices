// lib/StoreProvider.js
'use client'
import React, { useEffect, useState } from 'react'

import { Provider } from 'react-redux'
import store from './store'
import { MsalProvider } from '@azure/msal-react'
import { msalInstance } from './msalConfig'
import { logout, setAuthState } from '../ui/slices/authSlice'
import { handleRedirect } from '../ui/slices/authActions'
import { jwtDecode } from 'jwt-decode' 

const REFRESH_THRESHOLD = 300; // 5 minutes in seconds
export default function StoreProvider({ children }) {
  const [intervalId, setIntervalId] = useState(null);
 

  const setRefreshTime = (accessToken) => {
    if (!accessToken) return null;

    const decodedToken = jwtDecode(accessToken);
    const currentTime = Math.floor(Date.now() / 1000);
    const timeUntilExpiry = decodedToken.exp - currentTime - REFRESH_THRESHOLD;
    console.log('Time until token expiry:', timeUntilExpiry);
    return timeUntilExpiry;
  };
//   useEffect(() => {
//     const accounts = msalInstance.getAllAccounts();
//     const storedAccessToken = localStorage.getItem('accessToken');
//     if (accounts.length > 0 && storedAccessToken) {
//         store.dispatch(setAuthState({
//             isAuthenticated: true,
//             user: accounts[0],
//             accessToken: storedAccessToken, // Optionally, you may want to acquire the token here
//         }));
//     }
// }, []);

const acquireTokenWithRefreshToken = async () => {
  try {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      const response = await msalInstance.acquireTokenSilent({
        account: accounts[0],
        scopes: ['User.read'], // Specify your scopes here
      });

      const accessToken = response.accessToken;
      const user = response.account;

      // Update token in local storage
      localStorage.setItem('accessToken', accessToken);

      // Dispatch updated auth state to Redux store
      store.dispatch(setAuthState({
        isAuthenticated: true,
        user,
        accessToken,
      }));

      const currentTime = Math.floor(Date.now() / 1000);
      const decodedToken = jwtDecode(accessToken);
      const timeUntilExpiry = decodedToken.exp - currentTime - REFRESH_THRESHOLD;
     
      console.log('Setting backendRefreshTime to:', timeUntilExpiry);
      localStorage.setItem('backendRefreshTime', timeUntilExpiry);

      console.log('Token refreshed successfully:', accessToken);
    }
  } catch (error) {
    console.log('Error refreshing token:', error);
    store.dispatch(logout()); // Optionally log out the user if token refresh fails
  }
};

useEffect(() => {
  if (typeof window === 'undefined') return;
  const accounts = msalInstance.getAllAccounts();
  const storedAccessToken = localStorage.getItem('accessToken');
  if (accounts.length > 0 && storedAccessToken) {
    store.dispatch(setAuthState({
      isAuthenticated: true,
      user: accounts[0],
      accessToken: storedAccessToken,
    }));
  }

  const refreshTokenCheck = () => {
    const backendRefreshTime = setRefreshTime(storedAccessToken);
    if (backendRefreshTime !== null && backendRefreshTime <= 0) {
      acquireTokenWithRefreshToken();
    }
  };

  const id = setInterval(refreshTokenCheck, 3000); // Check every 3 seconds
  setIntervalId(id);

  return () => clearInterval(id);
}, []);

  return(
    <MsalProvider instance={msalInstance}>
    <Provider store={store}>{children}</Provider>
    </MsalProvider>
  )
}