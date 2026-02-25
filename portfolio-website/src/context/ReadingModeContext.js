import React, { createContext, useContext, useState } from "react";

const ReadingModeContext = createContext(null);

export function ReadingModeProvider({ children }) {
  const [isReadingMode, setReadingMode] = useState(false);
  return (
    <ReadingModeContext.Provider value={{ isReadingMode, setReadingMode }}>
      {children}
    </ReadingModeContext.Provider>
  );
}

export function useReadingMode() {
  return useContext(ReadingModeContext);
}
