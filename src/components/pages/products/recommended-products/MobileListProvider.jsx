"use client"
import React, { createContext, useContext, useState } from "react";

const MobileListContext = createContext();

export const MobileListProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  const setProducts = (data) => {
    setProductData(data);
  };

  return (
    <MobileListContext.Provider value={{ productData, setProducts }}>
      {children}
    </MobileListContext.Provider>
  );
};

export const useMobileList = () => {
  return useContext(MobileListContext);
};
