import styles from "./Listcard.module.css"

export function Listcard() {
    return (
        <div className={styles.Listcard}>
            <div className={styles.top}>
                <input type="text" placeholder="Digite o código ou o nome do produto" />
                <button> Adicionar </button>
            </div>

            <table>
                <tr>
                    <th>Produto</th>
                    <th>QTd</th>
                    <th>Preço</th>
                    <th></th>
                </tr>
                <tr className={styles.Item}>
                    <td>arroz 5 kg</td>
                    <td>2</td>
                    <td>R$5,49</td>
                    <td></td>
                </tr>
                <tr className={styles.Item}>
                    <td>Feijao 2 kg</td>
                    <td>3</td>
                    <td>R$5,49</td>
                     <td></td>
                </tr>
                <tr className={styles.Item}>
                    <td>Toddy 700g</td>
                    <td>1</td>
                    <td>R$5,49</td>
                     <td></td>
                </tr>
                <tr className={styles.Item}>
                    <td>Toddy 700g</td>
                    <td>1</td>
                    <td>R$5,49</td>
                     <td></td>
                </tr>
                <tr>
                    <th colSpan={2}>Total :</th>
                    <th colSpan={2}>R$ 50,00</th>
                </tr>
            </table>
        </div>
    )
}