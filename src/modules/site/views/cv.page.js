import React from "react"
import {
    MDBEdgeHeader,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBJumbotron,
    MDBAnimation
} from "mdbreact"
import Title from "../../shared/components/title.component"

const CvPage = () => {
    return (
        <>
            <Title title="CV" description="Tenha acesso ao meu currículo virtual!" />
            <MDBEdgeHeader color="mdb-color darken-2" className="sectionPage" />
            <MDBAnimation type="zoomIn" duration="500ms">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md={8} className="mx-auto">
                            <MDBJumbotron className="mt-3">
                                <h1 className="text-center">
                                    Meu CV
                                 </h1>
                                <p style={{ textAlign: 'center' }}>Em breve...</p>
                                <p style={{ textAlign: 'center' }}>Enquanto isso, acesse a minha página do LinkedIn <a href="https://www.linkedin.com/in/rafaelgcs"> clicando aqui</a></p>
                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBAnimation>
        </>
    )
}

export default CvPage
