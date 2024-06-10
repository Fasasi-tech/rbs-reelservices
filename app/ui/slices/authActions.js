
import { msalInstance } from "@/app/redux/msalConfig";
import { setAuthState, logout } from "./authSlice";
import {InteractionRequiredAuthError} from '@azure/msal-common'
import { useMsal } from '@azure/msal-react'
// const loginRequest ={
//     scopes:['openid', 'profile', 'api.read']
// }


// export const signIn = (instance) => async ( dispatch) =>{
//     try{
     
//         const loginResponse = await instance.loginRedirect(loginRequest);
//         console.log(loginResponse)
//         const tokenRequest = {
//           scopes: ['User.read'],
//           account: loginResponse.account,
//         };
    
//         const tokenResponse = await instance.acquireTokenSilent(tokenRequest);
//         dispatch(setAuthState({
//           isAuthenticated: true,
//           user: loginResponse.account,
//           accessToken: tokenResponse.accessToken,
        
//         }));
//     } catch(error){
//         console.error(error);
//     if (error instanceof InteractionRequiredAuthError) {
//       const tokenResponse = await instance.acquireTokenPopup(tokenRequest);
    
//       dispatch(setAuthState({
//         isAuthenticated: true,
//         user: tokenResponse.account,
//         accessToken: tokenResponse.accessToken,
       
//       }));
//     }
//     }
// }
const convertMapToObject = (map) => {
  const obj = {};
  for (let [key, value] of map) {
    obj[key] = value;
  }
  return obj;
};
// export const signIn = (instance, accounts) => async (dispatch) => {
//   try {
//     const loginResponse = await instance.loginPopup({
//       scopes: ['User.read']
//     });
//     const tokenRequest= {
//                  scopes: ['User.read'],
//                 account: loginResponse.account,
//              };

//     const tokenResponse = await instance.acquireTokenSilent(tokenRequest);
//     const user = loginResponse.account;
//     const accessToken = tokenResponse.accessToken
//     // const accessToken = loginResponse.accessToken;

    

//     // Convert non-serializable values to serializable
//     const serializedUser = {
//       ...user,
//       tenantProfiles: convertMapToObject(user.tenantProfiles),
//     };

//     dispatch(setAuthState({ user:serializedUser, accessToken }));
//   } catch (error) {
//     console.error('Login failed:', error);
//   }
// };

// export const signOut = (instance) => async (dispatch) => {
//   try {
//     await instance.logoutPopup();
//     dispatch(logout());
//   } catch (error) {
//     console.error('Logout failed:', error);
//   }
// };

// export const signOut = (instance) => (dispatch) => {
//     msalInstance.logoutPopup();
//     dispatch(logout());
//   };

export const signIn = (instance) => async (dispatch) => {
  try {
    const loginResponse = await instance.loginPopup({
      scopes: ['User.read']
    });

    console.log('Login response:', loginResponse);

    const tokenRequest = {
      scopes: ['User.read'],
      account: loginResponse.account,
    };

    let tokenResponse;
    try {
      tokenResponse = await instance.acquireTokenSilent(tokenRequest);
    } catch (silentError) {
      console.error('Silent token acquisition failed:', silentError);
      // Fallback to acquire token interactively if silent acquisition fails
      if (silentError instanceof msal.InteractionRequiredAuthError) {
        try {
          tokenResponse = await instance.acquireTokenPopup(tokenRequest);
          console.log('Interactive token response:', tokenResponse);
        } catch (popupError) {
          console.error('Interactive token acquisition failed:', popupError);
          throw popupError;
        }
      } else {
        throw silentError;
      }
    }

    if (!tokenResponse || !tokenResponse.accessToken) {
      throw new Error('Failed to acquire access token');
    }

    const user = loginResponse.account;
    const accessToken = tokenResponse.accessToken;
    console.log(accessToken)

    // Convert non-serializable values to serializable
    const serializedUser = {
      ...user,
      tenantProfiles: convertMapToObject(user.tenantProfiles),
    };
    const authState = { isAuthenticated: true, user: serializedUser, accessToken };
    dispatch(setAuthState({...authState }));
  } catch (error) {
    console.error('Login failed:', error);
  }
};

export const signOut = (instance) => async (dispatch) => {
  try {
    await instance.logoutPopup();
    dispatch(logout());
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
