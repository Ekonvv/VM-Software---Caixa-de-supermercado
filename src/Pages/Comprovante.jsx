import { useLocation } from "react-router-dom";

export function Comprovante() {
  const location = useLocation();

  const { cliente, lista, pagamento, total } = location.state || {};

  return (
    <div style={{ padding: 30 }}>
      <h1>Comprovante</h1>

      <h2>Cliente</h2>
      <p>{cliente?.nome}</p>
      <p>{cliente?.telefone}</p>
      <p>{cliente?.cpf}</p>

      <h2>Produtos</h2>

      <ul>
        {lista?.map((item) => (
          <li key={item.code}>
            {item.code} - Qtd: {item.qtd}
          </li>
        ))}
      </ul>

      <h2>Pagamento</h2>
      <p>{pagamento}</p>

      <h2>Total</h2>
      <p>R$ {total?.toFixed(2)}</p>
    </div>
  );
}
