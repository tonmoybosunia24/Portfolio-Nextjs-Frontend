"use client";
import app from "@/firebase/firebase.config";
import { getAuth } from "firebase/auth";
import { createContext, useContext, useState } from "react";

/* ---------------------Create App Context------------------ */
export const AppContext = createContext(null);
/* ------------------Initialize Firebase Auth--------------- */
const auth = getAuth(app);

/* --------------------App Provider Component--------------- */
const AppProvider = ({ children }) => {
  /* -------------------------States------------------------ */
  const [user, setUser] = useState(null);
  /* -----------------------Context Value------------------- */
  const AppValue = { user, setUser };

  return <AppContext.Provider value={AppValue}>{children}</AppContext.Provider>;
};

export default AppProvider;

/* ------------------Custom Hook to Use Context--------------- */
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("UseApp Must Be Used Within AppProvider");
  }
  return context;
};
