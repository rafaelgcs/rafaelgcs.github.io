import React from "react"
import {
    MDBEdgeHeader,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBJumbotron,
    MDBAnimation,
    MDBBtn
} from "mdbreact"
import SectionContainer from "../components/sectionContainer"

const NotFoundPage = () => {
    return (
        <>
            <MDBEdgeHeader color="danger darken-3" className="sectionPage" />
            <MDBAnimation type="zoomIn" duration="500ms">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md={8} className="mx-auto">
                            <MDBJumbotron className="mt-3">
                                <h1 className="text-center">
                                    Página Não Encontrada!
                                 </h1>
                                <SectionContainer className="text-center">
                                    <p style={{ marginTop: '3rem' }}>Esta página pode estar em construção ou não existe, volte para a página inicial ou tente novamente mais tarde.</p>

                                </SectionContainer>
                                <div className="text-center">
                                    <MDBBtn active href="/" color="black">
                                        Página Inicial
                                    </MDBBtn>
                                </div>
                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBAnimation>
        </>
    )
}

export default NotFoundPage