import styles from "./Listcard.module.css";
import { useState, useEffect } from "react";

export function Listcard({ onProdutosChange, onTotalChange }) {
  // LISTA DE PRODUTOS (bem mais completa)
  const products = [
    { code: "001", nome: "Arroz Tipo 1 5kg", price: 24.9 },
    { code: "002", nome: "Feijão Carioca 1kg", price: 8.79 },
    { code: "003", nome: "Toddy 700g", price: 12.39 },
    { code: "004", nome: "Açúcar Cristal 1kg", price: 5.49 },
    { code: "005", nome: "Óleo de Soja 900ml", price: 7.99 },
    { code: "006", nome: "Macarrão Espaguete 500g", price: 3.89 },
    { code: "007", nome: "Molho de Tomate 340g", price: 3.29 },
    { code: "008", nome: "Leite UHT Integral 1L", price: 5.19 },
    { code: "009", nome: "Café Pilão 500g", price: 14.9 },
    { code: "010", nome: "Farinha de Trigo 1kg", price: 4.99 },
    { code: "011", nome: "Margarina 500g", price: 6.49 },
    { code: "012", nome: "Ovos Brancos 30un", price: 16.9 },
    { code: "013", nome: "Papel Higiênico 4 Rolos", price: 9.99 },
    { code: "014", nome: "Sabão em Pó 1kg", price: 11.79 },
    { code: "015", nome: "Detergente Líquido 500ml", price: 3.49 },
    { code: "016", nome: "Shampoo 400ml", price: 8.99 },
    { code: "017", nome: "Creme Dental 90g", price: 4.79 },
    { code: "018", nome: "Refrigerante 2L", price: 6.99 },
    { code: "019", nome: "Água Mineral 1,5L", price: 2.99 },
    { code: "020", nome: "Pão de Forma 450g", price: 7.49 },
    { code: "021", nome: "Presunto Fatiado 200g", price: 9.9 },
    { code: "022", nome: "Queijo Mussarela 200g", price: 12.9 },
    { code: "023", nome: "Mortadela 200g", price: 6.49 },
    { code: "024", nome: "Biscoito Maizena 400g", price: 4.29 },
    { code: "025", nome: "Salgadinho 150g", price: 5.99 },
    { code: "026", nome: "Chocolate em Barra 90g", price: 4.99 },
    { code: "027", nome: "Suco de Laranja 1L", price: 7.29 },
    { code: "028", nome: "Iogurte Natural 170g", price: 3.19 },
    { code: "029", nome: "Batata 1kg", price: 6.99 },
    { code: "030", nome: "Cebola 1kg", price: 5.49 },
  ];

  const [texto, setTexto] = useState(""); // O que foi digitado
  const [lista, setLista] = useState([]); // Produtos escolhidos

  // Quando a lista mudar → avisa o componente pai (Cardset?)
  useEffect(() => {
    // Pega os produtos completos com nome e preço
    const produtosCompletos = lista.map((item) => {
      const produto = products.find((p) => p.code === item.code);
      return {
        code: item.code,
        nome: produto?.nome || item.code,
        qtd: item.qtd,
        preco: produto?.price || 0,
      };
    });

    // Calcula o total
    const totalCalculado = produtosCompletos.reduce(
      (acc, item) => acc + item.preco * item.qtd,
      0,
    );

    // Envia pro pai
    onProdutosChange?.(produtosCompletos);
    onTotalChange?.(totalCalculado);
  }, [lista, onProdutosChange, onTotalChange]);

  // Adicionar produto pelo código
  function enviar() {
    const code = texto.trim();
    if (!code) return;

    const produto = products.find((p) => p.code === code);
    if (!produto) {
      alert("Código não encontrado!");
      return;
    }

    const produtoExistente = lista.find((p) => p.code === code);

    if (produtoExistente) {
      // Aumenta quantidade
      setLista(
        lista.map((p) => (p.code === code ? { ...p, qtd: p.qtd + 1 } : p)),
      );
    } else {
      // Adiciona novo
      setLista([...lista, { code: code, qtd: 1 }]);
    }

    setTexto(""); // Limpa o input
  }

  // Aumentar quantidade
  function aumentar(code) {
    setLista(
      lista.map((p) => (p.code === code ? { ...p, qtd: p.qtd + 1 } : p)),
    );
  }

  // Diminuir quantidade (mínimo 1)
  function diminuir(code) {
    setLista(
      lista.map((p) =>
        p.code === code && p.qtd > 1 ? { ...p, qtd: p.qtd - 1 } : p,
      ),
    );
  }

  // Remover item
  function remover(code) {
    setLista(lista.filter((p) => p.code !== code));
  }

  // Componente de linha da tabela
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

  // Cálculo do total (mostrado no rodapé)
  const total = lista.reduce((acc, item) => {
    const produto = products.find((p) => p.code === item.code);
    return acc + (produto?.price || 0) * item.qtd;
  }, 0);

  return (
    <div className={styles.Listcard}>
      <div className={styles.top}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite o código do produto"
          onKeyDown={(e) => {
            if (e.key === "Enter") enviar();
          }}
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
            <tr className={styles.empty}>
              <td colSpan="4">Nenhum produto adicionado 🛒</td>
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
