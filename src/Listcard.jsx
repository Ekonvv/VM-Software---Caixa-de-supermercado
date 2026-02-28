export default function Listcard() {
    return(
        <div className="Listcard">
            <input type="text" placeholder="Digite o código ou o nome do produto"/> 
            <button> Adicionar </button>
            <table>
                <tr>
                    <th>Produto</th>
                    <th>QTd</th>
                    <th>Preço</th>
                </tr>
                <tr>
                    <td>arroz 5gramas</td>
                    <td>62</td>
                    <td>92reisreis</td>
                </tr>
                <tr>
                    <th>Total :</th>
                    <th>50</th>
                </tr>
            </table>
        </div>
    )
}