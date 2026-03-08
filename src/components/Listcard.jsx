import styles from "./Listcard.module.css";
import { useState } from "react";

export function Listcard() {
  const products = [
    { code: "001", nome: "Arroz 5kg", price: 24.9 },
    { code: "002", nome: "Feijão 1kg", price: 19.4 },
    { code: "003", nome: "Toddy 700g", price: 12.39 },
  ];

  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  function enviar() {
    const produtoExistente = lista.find((p) => p.code === texto);

    if (produtoExistente) {
      setLista(
        lista.map(
          (p) => (p.code === texto ? { ...p, qtd: p.qtd + 1 } : p), //o ? e o : serve para fazer um rapido if/else
        ),
      );
    } else {
      setLista([...lista, { code: texto, qtd: 1 }]); //adicionar produto caso não exista
      // os tres pontos server para copia todas as propriedades do array
    }

    setTexto("");
  }

  function aumentar(code) {
    setLista(
      lista.map((p) => (p.code === code ? { ...p, qtd: p.qtd + 1 } : p)),
    );
  }

  function diminuir(code) {
    setLista(
      lista.map((p) =>
        p.code === code && p.qtd > 1 ? { ...p, qtd: p.qtd - 1 } : p,
      ),
    );
  }

  function remover(code) {
    setLista(lista.filter((p) => p.code !== code)); // aqui para remover um item da lista, criei outra lista inteira, mas sem o item desejado
  }

  function Storage({ item }) {
    const produto = products.find((p) => p.code === item.code);

    if (!produto) return null;

    return (
      <tr className={styles.Item}>
        <td>{produto.nome}</td>

        <td>
          <button onClick={() => diminuir(item.code)}>−</button>

          {item.qtd}

          <button onClick={() => aumentar(item.code)}>+</button>
        </td>

        <td>R$ {produto.price.toFixed(2)}</td>

        <td>
          <button onClick={() => remover(item.code)}>🗑</button>
        </td>
      </tr>
    );
  }

  const total = lista.reduce((acc, item) => {
    const produto = products.find((p) => p.code === item.code);

    if (!produto) return acc;

    return acc + produto.price * item.qtd;
  }, 0);

  return (
    <div className={styles.Listcard}>
      <div className={styles.top}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite o código do produto"
        />

        <button onClick={enviar}>Adicionar</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Qtd</th>
            <th>Preço</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {lista.length === 0 ? (
            <tr>
              <td colSpan="4" className={styles.empty}>
                Nenhum produto adicionado 🛒
              </td>
            </tr>
          ) : (
            lista.map((item) => <Storage key={item.code} item={item} />)
          )}
        </tbody>

        <tfoot>
          <tr>
            <th colSpan={3}>Total :</th>
            <th>R$ {total.toFixed(2)}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
