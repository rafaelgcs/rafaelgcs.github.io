import React, { useState } from "react"
import {
    MDBEdgeHeader,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBJumbotron,
    MDBIcon,
    MDBAnimation,
    MDBInput,
    MDBBtn
} from "mdbreact"
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import emailjs from 'emailjs-com'
import Notification from "../../shared/components/notifications"
import Title from "../../shared/components/title.component"

const keys = {
    service: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    template: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    user: process.env.REACT_APP_EMAILJS_USER_ID
}

const useStyles = makeStyles(() => ({
    loader: {
        color: '#1a90ff',
        animationDuration: '550ms',
    },
}));

const ContactPage = () => {
    const classes = useStyles()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subtitle, setSubtitle] = useState()
    const [message, setMessage] = useState()

    const [enableAlert, setEnableAlert] = useState(false)
    const [reloadingPage, setReloadingPage] = useState(false)

    const [notifications, setNotifications] = useState([])

    const showAlert = (title, message, type = "error") => {
        let nNotfications = notifications
        let not = {
            title,
            message,
            type
        }

        nNotfications.push(not)

        setNotifications(nNotfications)
        setEnableAlert(true)
        setTimeout(resetNotifications, 3000)
    }

    const resetNotifications = () => {
        setEnableAlert(false)
        setNotifications([])
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setSubtitle('')
        setMessage('')
    }

    const onSubmit = (ev) => {
        ev.preventDefault()

        let params = {
            name,
            email,
            subtitle,
            message
        }

        setReloadingPage(true)
        emailjs.send(keys.service, keys.template, params, keys.user)
            .then(
                () => {
                    showAlert('Sucesso!', "E-mail enviado com êxito! Aguarde o retorno ;)", "success")
                    resetForm()
                    setReloadingPage(false)
                },
                (error) => {
                    showAlert('Ops!?', `Aconteceu um problema - ${error}`, "warning")
                }
            ).catch(() => {
                showAlert('Erro!', `Tivemos problemas técnicos... Tente novamente!`, "danger")
            })
    }
    return (
        <>
            <Title title="Contato" description="Entre em contato comigo e agende já uma consultoria para fecharmos vários projetos! ;)" />
            {enableAlert && <Notification notifications={notifications} />}
            <MDBEdgeHeader color="mdb-color darken-2" className="sectionPage" />
            <MDBAnimation type="zoomIn" duration="500ms">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md={8} className="mx-auto">
                            <MDBJumbotron className="mt-3">
                                <h1 className="text-center">
                                    Contato
                                 </h1>
                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBAnimation>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md={6} className="mx-auto text-center">
                        <MDBBtn target="_blank" rel="opener noopener noreferrer" href="https://facebook.com/sanrafaelofc" size="lg" social="fb" color="blue">
                            <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>
                        <MDBBtn target="_blank" rel="opener noopener noreferrer" href="https://linkedin.com/in/rafaelgcs" size="lg" social="li" color="indigo">
                            <MDBIcon fab icon="linkedin-in" />
                        </MDBBtn>
                        <MDBBtn target="_blank" rel="opener noopener noreferrer" href="https://instagram.com/rafaelgcs" size="lg" social="ins" color="orange">
                            <MDBIcon fab icon="instagram" />
                        </MDBBtn>
                        <MDBBtn target="_blank" rel="opener noopener noreferrer" href="https://github.com/rafaelgcs" size="lg" social="git" color="dark">
                            <MDBIcon fab icon="github" />
                        </MDBBtn>
                        <MDBBtn target="_blank" rel="opener noopener noreferrer" href="mailto:rafaelsanct@gmail.com" size="lg" social="email" color="red">
                            <MDBIcon icon="envelope" />
                        </MDBBtn>
                        <MDBBtn target="_blank" rel="opener noopener noreferrer" href="https://api.whatsapp.com/send?phone=557197065007&text=Olá! Vim falar contigo através do seu site do GitHub!" size="lg" social="whatsapp" color="green">
                            <MDBIcon fab icon="whatsapp" />
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            {
                reloadingPage ? <MDBContainer className="mt-4 mb-5">
                    <MDBRow>
                        <MDBCol md={6} className="mx-auto mt-4 mb-4 text-center">
                            <CircularProgress
                                variant="indeterminate"
                                className={classes.loader}
                                size={80}
                                thickness={1}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                    :
                    <MDBContainer className="mt-4 mb-5">
                        <MDBRow>
                            <MDBCol md={6} className="mx-auto">
                                <form onSubmit={onSubmit}>
                                    <p className="h5 text-center mb-4">Fale comigo</p>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Seu Nome"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            value={name}
                                            onChange={(ev) => setName(ev.target.value)}
                                        />
                                        <MDBInput
                                            label="Seu E-mail"
                                            icon="envelope"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                            value={email}
                                            onChange={(ev) => setEmail(ev.target.value)}
                                        />
                                        <MDBInput
                                            label="Título da Mensagem"
                                            icon="tag"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            value={subtitle}
                                            onChange={(ev) => setSubtitle(ev.target.value)}
                                        />
                                        <MDBInput
                                            type="textarea"
                                            rows="2"
                                            label="Insira a sua mensagem"
                                            icon="pencil-alt"
                                            value={message}
                                            onChange={(ev) => setMessage(ev.target.value)}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn type="submit" color="dark">
                                            Enviar <MDBIcon far icon="paper-plane" className="ml-1" />
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            }
        </>
    )
}

export default ContactPage
