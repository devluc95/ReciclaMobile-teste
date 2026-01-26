export interface Movimento {
  valor: number;
  data: string;
}

export interface Saldo {
  total: number;
  movimentos: Movimento[];
}