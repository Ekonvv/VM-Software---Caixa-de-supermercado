import { useState } from "react";
import styles from "./Pagamento.module.css";

export function Pagamento({ onFormaPagamentoChange }) { // ADICIONE a prop
  const [pagamento, setPagamento] = useState("");

  function selecionarPagamento(tipo) {
    setPagamento(tipo);
    onFormaPagamentoChange(tipo); // ADICIONE
    console.log("Forma de pagamento escolhida:", tipo);
  }

  return (
    <div className={styles.Pagamento}>
      <h2>Forma de pagamento</h2>
      <div className={styles.buttons}>
        <button
          className={pagamento === "debito" ? styles.active : ""}
          onClick={() => selecionarPagamento("debito")}
        >
          💳 Débito
        </button>
        <button
          className={pagamento === "credito" ? styles.active : ""}
          onClick={() => selecionarPagamento("credito")}
        >
          💳 Crédito
        </button>
        <button
          className={pagamento === "pix" ? styles.active : ""}
          onClick={() => selecionarPagamento("pix")}
        >
          🔷 Pix
        </button>
        <button
          className={pagamento === "dinheiro" ? styles.active : ""}
          onClick={() => selecionarPagamento("dinheiro")}
        >
          💵 Dinheiro
        </button>
      </div>
    </div>
  );
}