import React, { useEffect } from "react"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBEdgeHeader,
    MDBAnimation,
    MDBJumbotron,
    MDBIcon,
    MDBCardImage,
} from "mdbreact"

import { images } from '../../../helpers/images'

const GalleryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MDBEdgeHeader color="mdb-color darken-2" className="sectionPage" />
            <MDBAnimation type="zoomIn" duration="500ms">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md={8} className="mx-auto">
                            <MDBJumbotron className="mt-3">
                                <h1 className="text-center">
                                    Portifólio
                                 </h1>
                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBAnimation>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md={12} className="mt-3">
                        <h2 className="text-center my-5 font-weight-bold">
                            Alguns dos meus trabalhos, já desenvolvidos.
                        </h2>
                        <p className="text-center text-muted mb-3">
                            Abaixo seguem alguns dos projetos em que desenvolvi ou fiz parte da equipe, alguns deles estão com código aberto em meu GitHub.
                        </p>
                        <hr className="my-5" />

                        <MDBRow id="categories">
                            <MDBCol md={4}>
                                <MDBAnimation reveal type="fadeInLeft">
                                    <MDBCard cascade className="my-3 grey lighten-4">
                                        <MDBCardImage
                                            cascade
                                            className="img-fluid"
                                            src={images.site_villaEncantada}
                                        />
                                        <MDBCardBody cascade className="text-center">
                                            <MDBCardTitle>
                                                <MDBIcon
                                                    icon="earlybirds"
                                                    brand
                                                    className="green-text pr-2"
                                                />
                                                <strong>Escola Villa Encantada</strong>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                Site da instituição de ensino creche e escola: Escola Villa Ecantada, para visualizar, basta acessar o link disponível no botão abaixo.
                                            </MDBCardText>
                                            <a target="_blank" rel="opener noopener noreferrer" href="https://www.escolavillaencantada.com.br" className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline">
                                                Visualizar
                                            </a>
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
                                            src={images.site_qualityTourBa}
                                        />
                                        <MDBCardBody cascade className="text-center">
                                            <MDBCardTitle>
                                                <MDBIcon
                                                    icon="taxi"
                                                    className="orange-text pr-2"
                                                />
                                                <strong>QualityTour Bahia</strong>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                Site da empresa de turismo QualityTour Bahia, sendo seu primeiro contato com a WEB.
                                            </MDBCardText>
                                            <a target="_blank" rel="opener noopener noreferrer" href="https://www.qualitytourbahia.com.br" className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline">
                                                Visualizar
                                            </a>
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
                                            src={images.site_ejcet}
                                        />
                                        <MDBCardBody cascade className="text-center">
                                            <MDBCardTitle>
                                                <MDBIcon fas icon="code" className="green-text pr-2" />
                                                <strong> EJC&T</strong>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                A primeira versão do site da Empresa Júnior de Ciências e Tecnologia da UFBA, que hoje em dia já está prestando os mesmos serviços.
                                            </MDBCardText>
                                            <a target="_blank" rel="opener noopener noreferrer" href="https://www.ejcet.com.br" className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline">
                                                Visualizar
                                            </a>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>
                            <MDBCol md={4}>
                                <MDBAnimation reveal type="fadeInLeft">
                                    <MDBCard cascade className="my-3 grey lighten-4">
                                        <MDBCardImage
                                            cascade
                                            className="img-fluid"
                                            src={images.logo_3lines}
                                        />
                                        <MDBCardBody cascade className="text-center">
                                            <MDBCardTitle>
                                                <MDBIcon
                                                    icon="image"
                                                    className="grey-text pr-2"
                                                />
                                                <strong>Logo 3lines</strong>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                Criação da logo da empresa 3lines.
                                            </MDBCardText>
                                            <a target="_blank" rel="opener noopener noreferrer" href="https://www.3lines.io" className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline">
                                                Visualizar
                                            </a>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>
                            <MDBCol md={4}>
                                <MDBAnimation reveal type="fadeInLeft">
                                    <MDBCard cascade className="my-3 grey lighten-4">
                                        <MDBCardImage
                                            cascade
                                            className="img-fluid"
                                            src={images.logo_ejcet}
                                        />
                                        <MDBCardBody cascade className="text-center">
                                            <MDBCardTitle>
                                                <MDBIcon
                                                    icon="image"
                                                    className="green-text pr-2"
                                                />
                                                <strong>Logo EJC&T</strong>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                Criação da logo da Empresa Júnior de Ciências e Tecnologia da UFBA.
                                            </MDBCardText>
                                            <a target="_blank" rel="opener noopener noreferrer" href="https://www.ejcet.com.br" className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline">
                                                Visualizar
                                            </a>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default GalleryPage