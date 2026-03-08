import { useState } from "react";
import styles from "./Login.module.css";
import Logo from "../img/login.png";
import { Link } from "react-router-dom";
import { FaLock, FaUsers, FaEye, FaEyeSlash } from "react-icons/fa";

export function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo VM-Software" />
      </div>

      <form>
        <h1>Acessar o Sistema</h1>

        <div className={styles.nome}>
          <label>
            <FaUsers className={styles.icon} /> Funcionário:
          </label>
          <input type="text" placeholder="Username" required />
        </div>

        <div className={styles.senha}>
          <label>
            <FaLock className={styles.icon} /> Senha:
          </label>

          <div className={styles.eyes}>
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Senha"
              required
            />

            <span
              className={styles.eyeIcon}
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <Link to={"./Caixa"}>
          <button className={styles.entrar} type="submit">
            Entrar no Sistema
          </button>
        </Link>
      </form>
    </div>
  );
}
