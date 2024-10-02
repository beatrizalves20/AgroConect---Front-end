import React from 'react';
import { 
    CHeader, 
    CHeaderBrand, 
    CHeaderNav,
} from '@coreui/react';
import agroConectIMG from "../../assets/agroConect.svg";
import { CNav, CNavItem, CNavLink } from '@coreui/react';

const Header = () => {
    return (
      <CHeader>
        <CHeaderBrand href="/">
        <span className="login-form-title"><img src={agroConectIMG} alt="Agro Conect" />
        </span></CHeaderBrand>
        <CHeaderBrand>
          <CNav className="justify-content-end">
            <CNavItem>
              <CNavLink href="/cadastro_cliente">Cliente</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/cadastro_produtor">Produtor</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/login">Login</CNavLink>
            </CNavItem>
          </CNav>
        </CHeaderBrand>
        <CHeaderNav />
      </CHeader>
    );
  };
  
  export default Header;
