import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormFloating,
  CRow,
} from '@coreui/react'
import Sidebar from "../Sidebar";
const FormProduto = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <Sidebar/>
      <CContainer>
        
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Cadastrar Produto</h1>
                  <p className="text-body-secondary">Cadastre um novo produto</p>

                  <CFormFloating className="mb-3">
                    <CFormInput
                      type="text"
                      id="produto"
                      placeholder="produto"
                    />
                    <label htmlFor="produto">Produto</label>
                  </CFormFloating>

                  <CFormFloating className="mb-3">
                    <CFormInput
                      type="text"
                      id="preco"
                      placeholder="Preço"
                      autoComplete="preco"
                    />
                    <label htmlFor="preco">Preço</label>
                  </CFormFloating>

                  <CFormFloating className="mb-3">
                    <CFormInput
                      type="text"
                      id="imagem"
                      placeholder="Imagem"
                      autoComplete="imagem"
                    />
                    <label htmlFor="imagem">Imagem</label>
                  </CFormFloating>

                  <CFormFloating className="mb-4">
                    <CFormInput
                      type="text"
                      id="descricao"
                      placeholder=""
                      autoComplete="descricao"
                    />
                    <label htmlFor="repitaSenha">Descrição</label>
                  </CFormFloating>

                  <div className="container-login-form-btn">
                    <button className="login-form-btn" type="submit">Cadastrar um novo Produto</button>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default FormProduto;
