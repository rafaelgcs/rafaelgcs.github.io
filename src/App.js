import React, { useState } from 'react'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBAnimation
} from 'mdbreact'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import { images } from './helpers/images'

import "./App.css"


const App = () => {
  const collapseID = ""
  const mainContentClass = 'mainContent'
  const [sidebarNavClass, setSidebarNavClass] = useState('sidebarNav')

  const MenuLinks = () => {
    return (
      <MDBContainer>
        <MDBNavbarNav>
          <MDBNavItem>
            <MDBNavLink
              exact
              to='/'
              onClick={closeCollapseNav}
            >
              <strong style={{ color: 'white', marginLeft: '1rem' }}>Página inicial</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              onClick={closeCollapseNav}
              to='/sobre'
            >
              <strong style={{ color: 'white', marginLeft: '1rem' }}>Sobre</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              onClick={closeCollapseNav}
              to='/portifolio'
            >
              <strong style={{ color: 'white', marginLeft: '1rem' }}>Portifólio</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              onClick={closeCollapseNav}
              to='/cv'
            >
              <strong style={{ color: 'white', marginLeft: '1rem' }}>Meu CV</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              onClick={closeCollapseNav}
              to='/contato'
            >
              <strong style={{ color: 'white', marginLeft: '1rem' }}>Contato</strong>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBContainer>

    )
  }
  const getOpenedCollapseNav = () => {
    if (sidebarNavClass === 'sidebarNav') {
      setSidebarNavClass('sidebarNavOpenned')
    } else {
      setSidebarNavClass('sidebarNav')
    }
  }

  const closeCollapseNav = () => {
    setSidebarNavClass('sidebarNav')
  }

  const getCollapseCloseButton = () => {
    if (sidebarNavClass === 'sidebarNavOpenned') {
      return (
        <div style={{ height: 35 }}>
          <div className="float-right">

            <MDBTooltip placement='top' domElement style={{ display: "block" }}>
              <MDBBtn flat
                onClick={closeCollapseNav}
              >
                <MDBIcon fas icon="times" className="mr-2 white-text" style={{ fontSize: 25 }} />
              </MDBBtn>
              <span>Fechar</span>
            </MDBTooltip>
          </div>
        </div>
      )
    }
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='flyout'>
        <div className={sidebarNavClass}>
          <MDBAnimation type="zoomIn" duration="500ms">
            {getCollapseCloseButton()}
            <MDBRow style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <MDBCol>
                <img href='/' src={images.profile} className="rounded mx-auto d-block" alt="aligment" />
              </MDBCol>
            </MDBRow>
            {MenuLinks()}
          </MDBAnimation>
        </div>

        <main className={mainContentClass}>
          <MDBNavbar color='black' dark expand='md' fixed='top' className="navbarTop" scrolling>
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold' fas="true">
              <MDBIcon icon="terminal" className="mr-2" />
              <strong className='align-middle'>Rafael Guimarães</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={getOpenedCollapseNav}
            />
            <MDBCollapse
              id='mainNavbarCollapse'
              isOpen={collapseID}
              navbar
            >
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={closeCollapseNav}
                  >
                    <MDBIcon icon="home" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBTooltip placement='bottom' domElement style={{ display: "block" }}>
                    <a
                      className='nav-link Ripple-parent'
                      href='https://github.com/rafaelgcs'
                      rel="Github Rafaelgcs"
                    >
                      <strong><MDBIcon fab icon="github" /></strong>
                    </a>
                    <span>GitHub rafaelgcs</span>
                  </MDBTooltip>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBTooltip placement='bottom' domElement style={{ display: "block" }}>
                    <a
                      className='nav-link Ripple-parent'
                      href='https://instagram.com/rafaelgcs'
                      target='_blank' rel='noopener noreferrer'
                    >
                      <strong><MDBIcon fab icon="instagram" /></strong>
                    </a>
                    <span>@rafaelgcs</span>
                  </MDBTooltip>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBTooltip placement='bottom' domElement style={{ display: "block" }}>
                    <a
                      className='nav-link Ripple-parent'
                      href='https://linkedin.com/in/rafaelgcs'
                      target='_blank' rel='noopener noreferrer'
                    >
                      <strong><MDBIcon fab icon="linkedin-in" /></strong>
                    </a>
                    <span>LinkedIn</span>
                  </MDBTooltip>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <Routes />
          <MDBFooter color='dark-grey'>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy {new Date().getFullYear()} Copyright:
                <a href='/'> Rafael Guimarães </a>
            </p>
          </MDBFooter>
        </main>

      </div>
    </Router>
  )
}

export default App
