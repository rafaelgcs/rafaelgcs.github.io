import React, { useEffect } from "react"
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBTooltip,
  MDBBtn
} from "mdbreact"
import "../styles/home_page.css"

import cssCardPhoto from '../../../assets/img/homeCards/view-css3.png'
import html5CardPhoto from '../../../assets/img/homeCards/view-html.png'
import jsCardPhoto from '../../../assets/img/homeCards/view-js.png'


const HomePage = () => {

  const scrollToTop = () => window.scrollTo(0, 0)

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <>
      <MDBEdgeHeader color="mdb-color darken-2" className="sectionPage" />
      <MDBAnimation type="zoomIn" duration="500ms">
        <div className="mt-3 mb-5">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md={10}
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody className="text-center">
                  <h2 className="h2-responsive mb-4">
                    <strong className="font-weight-bold">
                      <MDBIcon icon="terminal" className="mr-2" />
                      Rafael Guimarães
                    </strong>
                  </h2>
                  <MDBRow />
                  <MDBRow className="mt-3">
                    <MDBCol>
                      <p>Front Developer Using: </p>
                      <p>
                        <a
                          href="https://pt-br.reactjs.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >ReactJS</a>
                      </p>
                      <p>
                        <a
                          href="https://facebook.github.io/react-native/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >React Native</a>
                      </p>
                      <p>
                        <a
                          href="https://flutter.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >Flutter</a>
                      </p>
                      <p>
                        <a
                          href="https://angular.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >Angular</a>
                      </p>
                    </MDBCol>
                    <MDBCol>
                      <p>Back Developer Using: </p>
                      <p>
                        <a
                          href="https://www.php.net/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >PHP</a>
                      </p>
                      <p>
                        <a
                          href="https://docs.microsoft.com/pt-br/aspnet/#pivot=aspnet"
                          target="_blank" rel="opener noopener noreferrer"
                        >Asp.net MVC Using Entity Framework</a>
                      </p>
                      <p>
                        <a
                          href="https://nodejs.org/en/"
                          target="_blank" rel="opener noopener noreferrer"
                        >NodeJS</a>
                      </p>
                    </MDBCol>
                  </MDBRow>


                  <p className="pb-4">
                    The development of applications is the inovation of the world. We need the best UI for take the best application for our users.
              </p>
                  <MDBRow className="d-flex flex-row justify-content-center row">
                    <MDBTooltip placement='top' domElement style={{ display: "block" }}>
                      <a
                        className="mr-1 mx-2 mb-2"
                        href="https://github.com/rafaelgcs"
                        rel="Rafael Guimarães GitHub Repositório"
                      >
                        <MDBBtn color="dark">
                          <MDBIcon fab icon="github" className="mr-2 white-text" />
                          <span className="font-weight-bold white-text">My GitHub's Repo</span>

                        </MDBBtn>
                      </a>
                      <span>rafaelgcs</span>
                    </MDBTooltip>
                    <MDBTooltip placement='top' domElement style={{ display: "block" }}>
                      <a
                        className="mx-2 mb-2"
                        href="https://instagram.com/rafaelgcs"
                        rel="@rafaelgcs"
                      >
                        <MDBBtn color="dark">
                          <MDBIcon fab icon="instagram" className="mr-2 white-text" />
                          <span className="font-weight-bold white-text">Instagram</span>
                        </MDBBtn>
                      </a>
                      <span>@rafaelgcs</span>
                    </MDBTooltip>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol md={12} className="mt-4">
                <h2 className="text-center my-5 font-weight-bold">
                  Quais as minhas competências?
                </h2>
                <p className="text-center text-muted mb-1">
                  Venho trabalhando na área a alguns anos e após um curso de Arte Digital na <a href="https://saga.art.br/" target="_blank" rel="opener noopener noreferrer">SAGA</a>,
                acabei tomando gosto pela parte de design, ui/ux, e apostei bastante em desenvolvimento Front End.
                </p>
                <p className="text-center text-muted mb-1">
                  Venho atuando desde então com o intuito de crescer, principalmente na melhoria de interfaces para usuários,
                  trazendo, também, acessibilidade para as interfaces com o melhor visual possível.
                </p>
                <p className="text-center text-muted">
                  Com isso, tenho encontrado diversos frameworks que me auxiliam nesse desenvolvimento, o que mais venho utilizando é o
                <a href="https://mdbootstrap.com" target="_blank" rel="opener noopener noreferrer">  MDBootstrap</a>, que mistura a metodologia de design da Google (
                  <a href="https://material.io/" target="_blank" rel="opener noopener noreferrer">Material Design</a>) e um outro framework que revolucionou o desenvolvimento
                  WEB, o <a href="https://material.io/" target="_blank" rel="opener noopener noreferrer">Bootstrap</a>.
                </p>
                <hr className="my-5" />

                <MDBRow id="categories">
                  <MDBCol md={4}>
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src={html5CardPhoto}
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="html5"
                              brand
                              className="orange-text pr-2"
                            />
                            <strong>HTML</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            A revolução das linguagens de marcação. Tornar um código muito mais simples, prático e rápido.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md={4}>
                    <MDBAnimation reveal type="fadeInDown">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src={cssCardPhoto}
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="css3"
                              brand
                              className="blue-text pr-2"
                            />
                            <strong>CSS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Animações, cores, sombras, sobreposições, etc...
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md={4}>
                    <MDBAnimation reveal type="fadeInRight">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src={jsCardPhoto}
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon fab icon="js-square" className="orange-text pr-2" />
                            <strong>JavaScript</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            O melhor para as interações com os usuários, quando o CSS não nos dá
                            esse suporte, além de uma série de possibilidades que nos proporciona,
                            quando falamos da interface do usuário.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBAnimation>
    </>
  )
}
export default HomePage