import { useState } from "react";
import styles from "./Clientcard.module.css";
import { Link } from "react-router-dom";

export function Clientcard() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  function handleNome(e) {
    const valor = e.target.value;

    if (/^[A-Za-zÀ-ÿ\s]*$/.test(valor)) {
      setNome(valor);
    }
  }

  function handleTelefone(e) {
    const valor = e.target.value;

    if (/^\d*$/.test(valor)) {
      setTelefone(valor);
    }
  }

  function handleCpf(e) {
    const valor = e.target.value;

    if (/^\d*$/.test(valor)) {
      setCpf(valor);
    }
  }

  function finalizarCliente() {
    const cliente = {
      nome,
      telefone,
      cpf,
    };

    console.log(cliente);
  }

  return (
    <div className={styles.clientCard}>
      <h3>Dados do cliente</h3>

      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Digite o nome do cliente"
          value={nome}
          onChange={handleNome}
        />

        <input
          type="text"
          placeholder="Digite o contato (telefone)"
          value={telefone}
          onChange={handleTelefone}
        />

        <input
          type="text"
          placeholder="Digite o CPF do cliente"
          value={cpf}
          onChange={handleCpf}
        />
        <Link to={"/comprovante"}>
          <button onClick={finalizarCliente}>Finalizar</button>
        </Link>
      </div>
    </div>
  );
}
