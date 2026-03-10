// Navegar e guardar os dados
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Cardset.module.css";
import { Listcard } from "./Listcard";
import { Clientcard } from "./Clientcard";
import { Pagamento } from "./Pagamento";

export function Cardset() {
  const navigate = useNavigate(); // NAVEGAR ENTRE PÁGINAS
  

  const [produtos, setProdutos] = useState([]); // produtos comprados
  const [cliente, setCliente] = useState({}); // dados do cliente
  const [pagamento, setPagamento] = useState(""); // forma de pagamento
  const [total, setTotal] = useState(0); // total da compra

  function finalizar() {
    const dadosVenda = {
      cliente: cliente,
      lista: produtos,
      pagamento: pagamento,
      total: total
    };
    // Manda os dados pro comprovante
    navigate("/comprovante", { state: { dados: dadosVenda } });
  }

  return (
    <div className={styles.Cardset}>
      {/* RECEBER OS DADOS */}
      <Listcard onProdutosChange={setProdutos} onTotalChange={setTotal} />
      <Clientcard onClienteChange={setCliente} />
      <Pagamento onFormaPagamentoChange={setPagamento} />
      
      <button className={styles.botao} onClick={finalizar}>FINALIZAR VENDA</button>
    </div>
  );
}