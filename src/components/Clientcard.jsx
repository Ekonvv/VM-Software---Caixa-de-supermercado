import styles from "./Clientcard.module.css"

export function Clientcard() {
    return(
        <div className={styles.clientCard}>
            <h3>Dados do cliente</h3>
            <div className={styles.inputs}>
            <input type="text" placeholder="Digite o nome do cliente"/>
            <input type="text" placeholder="Digite o contato(telefone)"/>
            <input type="text" placeholder="Digite o CPF do cliente"/>
            <button>Finalizar</button>
            </div>
        </div>
    )
}