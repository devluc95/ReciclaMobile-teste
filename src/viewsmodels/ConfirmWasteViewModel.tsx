import { useState } from "react";

export function useConfirmWasteViewModel() {
  const [confirmed, setConfirmed] = useState(false);

  function handleConfirm() {
    console.log("✅ Ponto de coleta confirmado!");
    setConfirmed(true);
  }

  return {
    confirmed,
    handleConfirm,
  };
}
