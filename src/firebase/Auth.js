// https://dev.to/bmcmahen/using-firebase-with-react-hooks-21ap
// https://usehooks.com/useAuth/

import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import firebase, { firestore } from './firebase';

const auth = firebase.auth();

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const authObj = useProvideAuth();
  return <authContext.Provider value={authObj}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};


// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return auth
      .signInWithEmailAndPassword(email, password);
  };

  const signup = (email, password) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        // console.log(response)
        return firestore.collection('users').doc(response.user.uid).set({
          street_cred: 0,
          bio: '',
          display_name: '',
          age: 0,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const signout = () => {
    return auth
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  const sendPasswordResetEmail = (email) => {
    return auth
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    return auth
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    signInWithGoogle,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
