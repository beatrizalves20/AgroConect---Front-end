import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";

import agroConectIMG from "../../assets/agroConect.svg";

import { api } from '../../api';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    mensagem: "",
    mensagemTipo: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await api("http://localhost:5000/api/login", "POST", {
      email: formData.email,
      senha: formData.senha,
    });

    setFormData({
      ...formData,
      mensagem: result.message,
      mensagemTipo: result.type,
    });  
  };

  return (
    <>
      {formData.mensagem && (
        <div className={`mensagem ${formData.mensagemTipo}`}>
          {formData.mensagem}
        </div>
      )}

      <LayoutComponents>
        <form className="login-form" onSubmit={handleSubmit}>
          <span className="login-form-title">Login</span>

          <span className="login-form-title">
            <img src={agroConectIMG} alt="Agro Conect" />
          </span>

          <div className="wrap-input">
            <input
              className={formData.email !== "" ? "has-val input" : "input"}
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="focus-input" data-placeholder="E-mail"></span>
          </div>

          <div className="wrap-input">
            <input
              className={formData.senha !== "" ? "has-val input" : "input"}
              type="password"
              value={formData.senha}
              onChange={handleChange}
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
    </>
  );
};
