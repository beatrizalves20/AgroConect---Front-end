import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";

import agroConectIMG from "../../assets/agroConect.svg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Login</span>

        <span className="login-form-title">
          <img src={agroConectIMG} alt="Agro Conect" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Usuario"></span>
        </div>

        <div className="wrap-input">
          <input
            className={senha !== "" ? "has-val input" : "input"}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">É novo por aqui?</span>

          <Link className="txt2" to="/register">
            Cadastre-se!
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
