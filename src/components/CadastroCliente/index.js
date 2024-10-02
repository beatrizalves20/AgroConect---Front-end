import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
  CFormSelect,
} from '@coreui/react';
import Header from '../Header';
import './CadastroCliente.css';
import { api } from '../../api';
import estados from '../../estados';

const CadastroCliente = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    nascimento: '',
    email: '',
    senha: '',
    rua: '',
    numero: '',
    cidade: '',
    estado: '',
    cep: '',
    complemento: '',
    longitude: '',
    latitude: '',
  });

  const [errosForm, setErrosForm] = useState({
    mensagem: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataCompleta = {
      nome: formData.nome,
      cpf: formData.cpf,
      nascimento: formData.nascimento,
      email: formData.email,
      senha: formData.senha,
      rua: formData.rua,
      numero: formData.numero,
      cidade: formData.cidade,
      estado: formData.estado,
      cep: formData.cep,
      complemento: formData.complemento,
      longitude: formData.longitude,
      latitude: formData.latitude,
      tipo: 'cliente',
    };

    try {
  
      const response = await api("http://localhost:5000/api/usuarios", "POST", formDataCompleta);

      if (response.success) {
        navigate('/login');
      } else {
        setErrosForm({ mensagem: response.message });
      }
    } catch (error) {
      console.error('Erro ao cadastrar cliente e endereço:', error);
      setErrosForm({ mensagem: 'Erro ao processar sua solicitação' });
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div>
      <Header />
      {errosForm.mensagem && (
          <p className="error-message" style={{ color: 'red', marginTop: '10px' }}>
            {errosForm.mensagem}
          </p>
      )}
      <div className="bg-custom min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol xs={12} md={8} lg={6}>
              <CCard>
                <CForm className="row g-3 m-4" onSubmit={handleSubmit}>
                  <h1>Cadastro do cliente</h1>

                  <CCol xs={12}>
                    <CFormInput
                      type="text"
                      id="nome"
                      label="Nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                    />
                  </CCol>

                  <CCol xs={12} md={6}>
                    <CFormInput
                      type="text"
                      id="cpf"
                      label="CPF"
                      value={formData.cpf}
                      onChange={handleInputChange}
                      required
                    />
                  </CCol>

                  <CCol xs={12} md={6}>
                    <CFormInput
                      type="date"
                      id="nascimento"
                      label="Data de Nascimento"
                      value={formData.nascimento}
                      onChange={handleInputChange}
                      required
                    />
                  </CCol>

                  <CCol xs={12} md={6}>
                    <CFormInput
                      type="email"
                      id="email"
                      label="E-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </CCol>

                  <CCol xs={12} md={6}>
                    <CFormInput
                      type="password"
                      id="senha"
                      label="Senha"
                      value={formData.senha}
                      onChange={handleInputChange}
                      required
                    />
                  </CCol>

                  <CCol xs={12} md={9}>
                    <CFormInput
                      type="text"
                      id="rua"
                      label="Rua"
                      value={formData.rua}
                      onChange={handleInputChange}
                      required
                    />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormInput
                      type="number"
                      id="numero"
                      label="Número"
                      value={formData.numero}
                      onChange={handleInputChange}
                      required
                    />
                  </CCol>

                  <CCol xs={12} md={6}>
                    <CFormInput
                      type="text"
                      id="cidade"
                      label="Cidade"
                      value={formData.cidade}
                      onChange={handleInputChange}
                      required
                    />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormInput
                      type="text"
                      id="cep"
                      label="CEP"
                      value={formData.cep}
                      onChange={handleInputChange}
                      required
                    />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormSelect
                      id="estado"
                      label="Estado"
                      value={formData.estado}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecione</option>
                      {estados.map((estado) => (
                        <option key={estado.sigla} value={estado.sigla}>
                          {estado.nome}
                        </option>
                      ))}
                    </CFormSelect>
                  </CCol>

                  <CCol xs={12} md={6}>
                    <CFormInput
                      type="text"
                      id="complemento"
                      label="Complemento"
                      placeholder="Apartamento, casa ..."
                      value={formData.complemento}
                      onChange={handleInputChange}
                    />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormInput
                      type="number"
                      id="latitude"
                      label="Latitude"
                      value={formData.latitude}
                      onChange={handleInputChange}
                      required
                    />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormInput
                      type="number"
                      id="longitude"
                      label="Longitude"
                      value={formData.longitude}
                      onChange={handleInputChange}
                      required
                    />
                  </CCol>

                  <div className="d-grid">
                    <CButton className="bg-custom" type="submit">Cadastrar cliente</CButton>
                  </div>
                  <CButton color="link" href="/login" className="px-0">
                          Já possuo cadastro - Login
                  </CButton>
                </CForm>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </div>
  );
};

export default CadastroCliente;
