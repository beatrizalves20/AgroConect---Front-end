import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CFormInput,
    CCol,
    CForm
  } from '@coreui/react';
  import { api } from '../../api';

const ModalProduto = ({ visible, setVisible }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: '',
        preco: '',
        imagem: '',
        descricao: '',
    });
    const [errosForm, setErrosForm] = useState({
        mensagem: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataCompleta = {
            nome: formData.nome,
            preco: formData.preco,
            imagem: formData.imagem,
            descricao: formData.descricao,
        }
        try {
  
            const response = await api("http://localhost:5000/api/produto", "POST", formDataCompleta);
      
            if (response.ok) {
              navigate('/feed');
            } else {
              setErrosForm({ mensagem: response.message });
            }
          } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
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
        <>

          <CModal
            alignment="center"
            visible={visible}
            onClose={() => setVisible(false)}
            aria-labelledby="TooltipsAndPopoverExample"
          >
                    <CForm onSubmit={handleSubmit}>
            <CModalHeader>
              <CModalTitle id="TooltipsAndPopoverExample">Cadastrar Novo Produto</CModalTitle>
            </CModalHeader>
            <CModalBody>
            
            <div className=''>
                <CCol xs={12}>
                    <CFormInput 
                    id="nome" 
                    label="Nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    />
                </CCol>

                <CCol xs={12}>
                    <CFormInput 
                    id="preco" 
                    label="Preço"
                    value={formData.preco}
                    onChange={handleInputChange}
                    />
                </CCol>

                <CCol xs={12}>
                    <CFormInput 
                    id="imagem"
                    label="Imagem" 
                    value={formData.imagem}
                    onChange={handleInputChange}
                    />
                </CCol>

                <CCol xs={12}>
                    <CFormInput 
                    id="descricao" 
                    label="Descrição" 
                    value={formData.descricao}
                    onChange={handleInputChange}
                    />
                </CCol>
                
            </div>
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Fechar
              </CButton>
              <CButton color="primary" type="submit">Salvar produto</CButton>
            </CModalFooter>
            </CForm>
          </CModal>

        </>
      )
}

export default ModalProduto