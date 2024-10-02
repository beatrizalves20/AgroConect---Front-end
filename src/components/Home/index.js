import Card from "../Card"
import Carrossel from "../Carrossel"
import Header from "../Header"

import {
    CContainer,
} from '@coreui/react'

const Home = () => {
    return (
        <>
        <CContainer>
            <Header />
            <Carrossel />
            <Card />
        </CContainer>
        </>
    )
}

export default Home