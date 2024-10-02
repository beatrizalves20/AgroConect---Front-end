import React, { useState } from 'react';
import CIcon from '@coreui/icons-react';
import { cilSpeedometer, cilPuzzle, cilCloudDownload } from '@coreui/icons';
import {
  CSidebar,
  CSidebarHeader,
  CSidebarBrand,
  CSidebarNav,
  CNavItem,
  CNavTitle,
  CNavGroup,
} from '@coreui/react';
import ModalProduto from '../ModalProduto';

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CSidebar className="border-end" colorScheme="dark" style={{ backgroundColor: '#1f4e3c', height: '100vh', position: 'fixed', }}>
        <CSidebarHeader className="border-bottom">
          <CSidebarBrand>AgroConect</CSidebarBrand>
        </CSidebarHeader>
        <CSidebarNav>
          <CNavTitle>Menu</CNavTitle>
          <CNavItem href="#"><CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Feed</CNavItem>
          <CNavItem href="#" onClick={() => setVisible(true)}>
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Novo produto
          </CNavItem>
          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Setores
              </>
            }
          >
            <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span> Setor 1</CNavItem>
            <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span> Setor 2</CNavItem>
            <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span> Todos</CNavItem>
          </CNavGroup>
          <CNavItem href="https://coreui.io"><CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Sobre</CNavItem>
        </CSidebarNav>
      </CSidebar>

      <ModalProduto visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Sidebar;
