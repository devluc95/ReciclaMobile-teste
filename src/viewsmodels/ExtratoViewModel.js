import ExtratoModel from "../models/ExtratoModel";

export default class ExtratoViewModel {
  constructor() {
    this.itens = [
      new ExtratoModel(1, "Papel", "3 Kg", 8, "22/10/2025"),
      new ExtratoModel(2, "Metal", "5 Kg", 25, "20/10/2025"),
      new ExtratoModel(3, "Eletrônicos", "2 unid.", 50, "10/10/2025"),
    ];
  }

  getItens() {
    return this.itens;
  }
}
