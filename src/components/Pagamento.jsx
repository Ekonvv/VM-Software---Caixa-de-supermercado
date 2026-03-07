import styles from "./Pagamento.module.css"

export function Pagamento() {
    return (
        <div className={styles.Pagamento}>
            <h2>Forma de pagamento</h2>
            <div className={styles.buttons}>
                <button class="active">💳 Débito</button>
                <button>💳 Crédito</button>
                <button>🔷 Pix</button>
                <button>💵 Dinheiro</button>
            </div>
        </div>
    )
}