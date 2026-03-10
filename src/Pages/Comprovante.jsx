import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Comprovante.module.css";

export function Comprovante() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dados } = location.state || {};

  // Se não houver dados, mostra mensagem
  if (!dados) {
    return (
      <div>
        <h1>COMPROVANTE</h1>
        <p>Nenhuma venda finalizada!</p>
        <button onClick={() => navigate("/Caixa")}>Voltar ao Caixa</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>COMPROVANTE DE VENDA</h1>
      <p>Data: {new Date().toLocaleString("pt-BR")}</p>

      <h2>Cliente</h2>
      <p>Nome: {dados.cliente?.nome || "Não informado"}</p>
      <p>Telefone: {dados.cliente?.telefone || "Não informado"}</p>
      <p>CPF: {dados.cliente?.cpf || "Não informado"}</p>

      <h2>Produtos</h2>
      {dados.lista?.map((item, i) => {
        return (
          <div key={i}>
            <p>
              Código: {item.code} - Quantidade: {item.qtd}
            </p>
          </div>
        );
      })}

      <h2>Pagamento</h2>
      <p>{dados.pagamento || "Não informado"}</p>

      <h2>Total</h2>
      <p>R$ {dados.total?.toFixed(2) || "0.00"}</p>

      <button onClick={() => navigate("/Caixa")}>Nova Venda</button>
    </div>
  );
}
