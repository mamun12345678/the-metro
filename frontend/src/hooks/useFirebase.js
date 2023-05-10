/* eslint-disable react-hooks/exhaustive-deps */
import initializeFirebase from "../Components/Login/Login/Firebase/firebase.init";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { API_URL } from "../config";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = async (email, password, name) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response.user) {
        // Update the user's display name
        await updateProfile(response.user, { displayName: name });

        // Save user to MongoDB database
        saveUser(email, name, "POST");

        // Send an email verification link to the user
        await sendEmailVerification(response.user);

        // Log the user out
        await signOut(auth);

        // If the registration was successful, return true
        return true;
      } else {
        // If the registration was not successful, return false
        return false;
      }
    } catch (error) {
      // Handle any errors that might occur during registration
      console.error("Error during registration:", error);
      setAuthError(error.message);
      return false;
    }
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          setUser(user);
          const destination = location?.state?.from || "/";
          history.replace(destination);
          setAuthError("");
        } else {
          setUser({});
          setAuthError("Please verify your email before logging in.");
        }
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const sendResetPasswordEmail = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      // Show a success message to inform the user that the email has been sent
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setAuthError(error.message);
    }
  };

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          saveUser(user.email, user.displayName, "PUT");
          setAuthError("");
          const destination = location?.state?.from || "/";
          history.replace(destination);
        } else {
          setAuthError("Please verify your email before logging in.");
        }
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed();
  }, []);

  useEffect(() => {
    if (user?.email) {
      fetch(`${API_URL}/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin));
    }
  }, [user?.email]);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(`${API_URL}/users`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return {
    user,
    admin,
    token,
    isLoading,
    authError,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
    sendEmailVerification,
    sendResetPasswordEmail,
  };
};

export default useFirebase;
