import {Cardset} from "./Cardset";
import styles from "./Maincard.module.css"

export function Maincard() {
    return (
        <div className={styles.Maincard}>
            <h2> Controle de fluxo de caixa</h2>
            <Cardset />
        </div>
    )
}