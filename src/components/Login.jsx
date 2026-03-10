import { useState } from "react";
import styles from "./Login.module.css";
import Logo from "../img/login.png";
import { useNavigate } from "react-router-dom";
import { FaLock, FaUsers, FaEye, FaEyeSlash } from "react-icons/fa";

export function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Estados para guardar o usuário e senha digitados
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate(); // usado para redirecionar de página

  // Função que valida o login
  function handleLogin(e) {
    e.preventDefault(); // impede o reload da página

    // Verifica se o usuário é Tiago ou Eduardo Matheus e se a senha é 123
    if (
      (usuario === "Thiago" ||
        usuario === "Eduardo" ||
        usuario === "Akon" ||
        usuario === "Matheus") &&
      senha === "123"
    ) {
      navigate("/Caixa");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo VM-Software" />
      </div>

      {/* chama a função de validação ao enviar */}
      <form onSubmit={handleLogin}>
        <h1>Acessar o Sistema</h1>

        <div className={styles.nome}>
          <label>
            <FaUsers className={styles.icon} /> Funcionário:
          </label>

          {/* guarda o valor digitado no estado usuario */}
          <input
            type="text"
            placeholder="Username"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>

        <div className={styles.senha}>
          <label>
            <FaLock className={styles.icon} /> Senha:
          </label>

          <div className={styles.eyes}>
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            {/* botão que mostra ou esconde a senha */}
            <span
              className={styles.eyeIcon}
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button className={styles.entrar} type="submit">
          Entrar no Sistema
        </button>
      </form>
    </div>
  );
}
