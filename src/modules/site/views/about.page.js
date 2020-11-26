import React from "react"
import {
    MDBEdgeHeader,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBJumbotron,
    MDBAnimation
} from "mdbreact"

const AboutPage = () => {
    return (
        <>
            <MDBEdgeHeader color="mdb-color darken-2" className="sectionPage" />
            <MDBAnimation type="zoomIn" duration="500ms">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md={8} className="mx-auto">
                            <MDBJumbotron className="mt-3">
                                <h1 className="text-center">
                                    Sobre Mim
                                 </h1>
                                <p style={{marginTop:'3rem'}}>Graduando em Ciência e Tecnologia pela UFBA, Técnico em Desenvolvimento de Sistemas pelo Centro Universitário SENAI CIMATEC (2019), Técnico em design gráfico pela SAGA (2018). Presidente da EJC&T - Empresa Júnior de Ciência e Tecnologia da UFBA, Estagiário no SENAI CIMATEC atuando na área de desenvolvimento de softwares.</p>
                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBAnimation>
        </>
    )
}

export default AboutPage
