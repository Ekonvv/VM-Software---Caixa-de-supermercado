import styles from "./Dadoscard.module.css"

export function Dadoscard() {
    return(
        <div className={styles.Dadoscard}>
            <h2>Dados do cliente</h2>
            <input type="text" placeholder="Digite o nome do cliente"/>
            <input type="text" placeholder="Digite o contato(telefone)"/>
            <input type="text" placeholder="Digite o CPF do cliente"/>
            <button>Finalizar</button>
        </div>
    )
}