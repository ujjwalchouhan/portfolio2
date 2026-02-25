import React, { createContext, useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const WorkTransitionContext = createContext(null);

export function WorkTransitionProvider({ children }) {
  const [morph, setMorph] = useState(null);
  const navigate = useNavigate();

  const startMorph = useCallback(
    ({ imageSrc, rect, to }) => {
      setMorph({ imageSrc, rect, to });
    },
    []
  );

  const value = { morph, setMorph, startMorph, navigate };
  return (
    <WorkTransitionContext.Provider value={value}>
      {children}
    </WorkTransitionContext.Provider>
  );
}

export function useWorkTransition() {
  return useContext(WorkTransitionContext);
}
