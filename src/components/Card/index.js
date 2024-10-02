import {
    CCardGroup,
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

import './Card.css'


const Card = () => {
    return (
      <CCardGroup className="card-group">
        <CCard>
          <CCardImage orientation="top" src={'https://empaer.pb.gov.br/noticias/governo-lembra-dia-da-extensao-rural-com-realizacao-de-jornadas-paraiba-produtiva/dia-da-extensionista-06-12.jpg/@@images/74959c30-3082-4d5d-9d18-2ce7edd109c1.jpeg'} />
          <CCardBody>
            <CCardTitle>Auxílio na Comercialização</CCardTitle>
            <CCardText>
              A Agroconect ajuda você, agricultor familiar, a comercializar os seus produtos na região em que sua empresa ou estabelecimento está inserido. 
            </CCardText>
            <CCardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardText>
          </CCardBody>
        </CCard>
        <CCard>
          <div className='card-image'>
          <CCardImage orientation="top" src={'https://blog.vhsys.com.br/wp-content/uploads/2022/09/Cadastro-Produtor-Rural.webp'} />
          </div>
          <CCardBody className="custom-card-body">
            <CCardTitle>Eficiência no Aproveitamento dos Produtos</CCardTitle>
            <CCardText>
              Os seus produtos podem ser encaminhados para consumidores ou empresas parceiras que possam comprar em uma escala maior.
            </CCardText>
            <CCardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardText>
          </CCardBody>
        </CCard>
        <CCard className="custom-card">
          <CCardImage orientation="top" src={'https://wamclog.com.br/wp-content/uploads/2022/10/Qual-o-Papel-da-Agricultura-no-Comercio-Exterior.jpeg'} />
          <CCardBody>
            <CCardTitle>Consulta de Produtos Disponíveis para os Clientes</CCardTitle>
            <CCardText>
              Para os clientes que desejarem consultar a disponibilidades dos produtos na feira, basta conferir aqui no site.
            </CCardText>
            <CCardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardText>
          </CCardBody>
        </CCard>
      </CCardGroup>
    )
}

export default Card