import React from 'react'
import Helmet from 'react-helmet'

const Title = (props) => {
    const { title, description } = props
    const defaultTitle = "Rafael Guimarães"
    const defaultDescription = "Este é um site me apresentando para vocês! Um jovem desenvolvedor com muito conhecimento e a disposição de sempre novos projetos, principalmente desafiadores!"

    return (
        <Helmet>
            <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
            <meta name="description" content={description ? description : defaultDescription} />
        </Helmet>
    )
}

export default Title