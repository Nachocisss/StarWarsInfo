import React, { createContext, useContext, useState } from "react";

const DetailContext = createContext({});

export function DetailProvider({ children }) {
  const [selected, setSelected] = useState({});

  function selectCharacter(character) {
    console.log(character);

    setSelected(character);
  }
  return (
    <DetailContext.Provider value={{ selected, selectCharacter }}>
      {children}
    </DetailContext.Provider>
  );
}

export function useDetails() {
  return useContext(DetailContext);
}
