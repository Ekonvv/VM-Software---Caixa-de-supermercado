import { Listcard } from "./Listcard";
import { Clientcard } from "./Clientcard";
import { Pagamento } from "./Pagamento";
import styles from "./Cardset.module.css";
// colocar aqui as "funções" como a Listcard

export function Cardset() {
  return (
    <div className={styles.Cardset}>
      <Listcard />
      <Clientcard />
      <Pagamento />
    </div>
  );
}
