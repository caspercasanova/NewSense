// https://dev.to/bmcmahen/using-firebase-with-react-hooks-21ap
// https://usehooks.com/useAuth/

import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase, { firestore } from '../firebase';

const auth = firebase.auth();

const authContext = createContext();

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      return error;
    }
    return null;
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  };

  const signup = async (email, password) => {
    try {
      const newUser = await auth.createUserWithEmailAndPassword(email, password);
      await firestore.collection('users').doc(newUser.user.uid).set({
        street_cred: 0,
        bio: '',
        display_name: '',
        age: 0,
      });
    } catch (error) {
      console.log(error);
      return false;
    }
    return null;
  };

  const signout = async () => {
    try {
      await auth.signOut();
      setUser(false);
    } catch (error) {
      console.log(error);
      setUser(false);
    }
    return null;
  };

  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const confirmPasswordReset = async (code, password) => {
    try {
      await auth.confirmPasswordReset(code, password);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((newUser) => {
      if (newUser) {
        setUser(newUser);
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

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const authObj = useProvideAuth();
  return <authContext.Provider value={authObj}>{children}</authContext.Provider>;
}
