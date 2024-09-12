import React, { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

// Create a new context for user information
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    if (loading) return;
    if (!user) return;

    // Fetch user information
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        alert("An error occurred while fetching user data");
      }
    };

    fetchUserName();
  }, [user, loading]);

  useEffect(() => {
    if (user) {
      user.getIdToken().then((token) => {
        setToken(token);
      });
    }
  }, [user]);

  const logoutUser = () => {
    setToken(null);

    logout();
  };

  const userContextValue = {
    user,
    name,
    token,
    logoutUser,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
