import { useState } from "react";
import styles from "./Clientcard.module.css";

export function Clientcard({ onClienteChange }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  // Função auxiliar para formatar telefone
  const formatarTelefone = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, "").slice(0, 11);

    if (apenasNumeros.length <= 2) return apenasNumeros;
    if (apenasNumeros.length <= 7) {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
    }
    return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7)}`;
  };

  // Função auxiliar para formatar CPF
  const formatarCpf = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, "").slice(0, 11);

    if (apenasNumeros.length <= 3) return apenasNumeros;
    if (apenasNumeros.length <= 6) {
      return `${apenasNumeros.slice(0, 3)}.${apenasNumeros.slice(3)}`;
    }
    if (apenasNumeros.length <= 9) {
      return `${apenasNumeros.slice(0, 3)}.${apenasNumeros.slice(3, 6)}.${apenasNumeros.slice(6)}`;
    }
    return `${apenasNumeros.slice(0, 3)}.${apenasNumeros.slice(3, 6)}.${apenasNumeros.slice(6, 9)}-${apenasNumeros.slice(9)}`;
  };

  function handleNome(e) {
    const valor = e.target.value;
    if (/^[A-Za-zÀ-ÿ\s]*$/.test(valor)) {
      setNome(valor);
      onClienteChange?.({ nome: valor, telefone, cpf });
    }
  }

  function handleTelefone(e) {
    const valorFormatado = formatarTelefone(e.target.value);
    setTelefone(valorFormatado);
    // Envia o valor sem formatação (só números) para o pai, se precisar
    const valorLimpo = valorFormatado.replace(/\D/g, "");
    onClienteChange?.({ nome, telefone: valorLimpo, cpf });
  }

  function handleCpf(e) {
    const valorFormatado = formatarCpf(e.target.value);
    setCpf(valorFormatado);
    // Envia o valor sem formatação (só números) para o pai
    const valorLimpo = valorFormatado.replace(/\D/g, "");
    onClienteChange?.({ nome, telefone, cpf: valorLimpo });
  }

  return (
    <div className={styles.clientCard}>
      <h3>Dados do cliente</h3>
      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Nome do cliente"
          value={nome}
          onChange={handleNome}
          maxLength={60}
        />

        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={handleTelefone}
          maxLength={15}
        />

        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={handleCpf}
          maxLength={14}
        />
      </div>
    </div>
  );
}
