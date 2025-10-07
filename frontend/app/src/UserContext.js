// UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const UserContext = createContext();

// Custom hook for easier access to the context
export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}