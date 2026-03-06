import {Cardset} from "./Cardset";
import styles from "./Maincard.module.css"

 // esse components é a caixa cinza escuro 
 // para servir de fundo
export function Maincard() {
    return (
        <div className={styles.Maincard}>
            <h2> Controle de fluxo de caixa</h2>
            <Cardset />
        </div>
    )
}