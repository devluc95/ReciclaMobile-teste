// src/viewmodels/WelcomeViewModel.ts
import { useState } from "react";

export const useWelcomeViewModel = () => {
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);
    // Aqui você pode colocar navegação ou lógica inicial
    setTimeout(() => {
      setLoading(false);
      console.log("App iniciado!");
    }, 1500);
  };

  return {
    loading,
    handleStart,
  };
};