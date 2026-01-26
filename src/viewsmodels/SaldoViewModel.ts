import { useState } from "react";

export const useSaldoViewModel = () => {
  const [saldo, setSaldo] = useState({
    total: 30,
    movimentos: [
      { valor: 10, data: "25/10/2025" },
      { valor: 10, data: "15/10/2025" },
      { valor: 10, data: "08/10/2025" },
    ],
  });

  // Função para obter itens (movimentos)
  const getItens = () => {
    return saldo.movimentos;
  };

  return { saldo, setSaldo, getItens };
};
