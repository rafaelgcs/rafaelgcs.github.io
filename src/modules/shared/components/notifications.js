import React from "react";
import { MDBNotification, MDBContainer } from "mdbreact";

const Notification = (props) => {

    const { notifications } = props

    const generateNotification = (not) => {
        let color = "red"
        if (not.type === 'danger') {
            color = "red"
        } else if (not.type === 'success') {
            color = "green"
        } else {
            color = "orange"
        }

        return <MDBNotification
            key={`notificacao_${not.title}`}
            show
            fade
            icon="envelope"
            iconClassName={`${color}-text`}
            title={not.title}
            message={not.message}
        />
    }

    return (
        <MDBContainer
            style={{
                width: "auto",
                position: "fixed",
                top: "10px",
                right: "10px",
                zIndex: 9999
            }}
        >
            {
                notifications.map((notification) => {
                    return generateNotification(notification)
                })
            }
        </MDBContainer>
    )
}

export default Notification;