import { useState } from "react";
import { RegisterModel } from "../models/RegisterModel";

export const useRegisterViewModel = () => {
  const [form, setForm] = useState<RegisterModel>({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (key: keyof RegisterModel, value: string | boolean) => {
    setForm({ ...form, [key]: value });
  };

  const handleRegister = () => {
    if (!form.email || !form.password) {
      alert("Preencha todos os campos!");
      return;
    }
    alert(`Usuário ${form.email} registrado com sucesso!`);
    // Aqui você pode chamar a API de cadastro futuramente
  };

  return {
    form,
    handleChange,
    handleRegister,
  };
};