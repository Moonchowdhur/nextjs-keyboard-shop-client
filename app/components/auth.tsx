"use client";

import React, { createContext, useState } from "react";

export const AuthContext = createContext({});
// @ts-expect-error: Unreachable code error
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: null });
  const [cart, setCart] = useState([]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, setCart, cart }}>
      {children}
    </AuthContext.Provider>
  );
};
