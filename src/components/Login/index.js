import React from 'react'
import { useState } from "react";
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { Link, useNavigate} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert,
} from '@coreui/react'

import { api } from '../../api';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const [errosForm, setErrosForm] = useState({
    mensagem: '',
    tipo: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, senha } = formData;
    const result = await api("http://localhost:5000/api/login", "POST", { email, senha });
    console.log(result);
    setErrosForm({
      mensagem: result.message,
      tipo: result.type,
    });

    if (result.type === 'success') {
      navigate('/feed'); 
    } else {
      setErrosForm({
        mensagem: result.message,
        tipo: result.type,
      });
    }
  };
  
  return (
    <>
      {errosForm.mensagem && (
        <CAlert className={`mensagem ${errosForm.tipo}`}>
          {errosForm.mensagem}
        </CAlert>
      )}
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <p className="text-body-secondary">Entre em sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                      placeholder="Nome do usuário" 
                      autoComplete="username" 
                      name="email"
                      onChange={handleChange}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Senha"
                        autoComplete="senha"
                        name="senha"
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                      <CButton style={{ backgroundColor: '#28b938', color: 'black'}} className="px-4" type="submit">
                          Entrar
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Esqueceu a senha?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white py-5" style={{ width: '44%', backgroundColor: '#1f4e3c'}}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Cadastre-se</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton style={{ backgroundColor: '#28b938', color: 'black'}} className="mt-3" active tabIndex={-1}>
                        Inscreva-se agora!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </>
  )
}

export default Login
