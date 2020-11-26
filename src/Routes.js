import React from "react"
import { Route, Switch } from "react-router-dom"


import HomePage from './modules/site/views/home.page'

// MY PAGES
import GalleryPage from './modules/site/views/gallery.page'
import AboutPage from './modules/site/views/about.page'
import ContactPage from './modules/site/views/contact.page'
import CvPage from './modules/site/views/cv.page'

import NotFoundPage from './modules/shared/views/not_found.page'


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* MY PAGES */}
        <Route exact path="/portifolio" component={GalleryPage} />
        <Route exact path="/sobre" component={AboutPage} />
        <Route exact path="/contato" component={ContactPage} />
        <Route exact path="/cv" component={CvPage} />
        {/* DEFAULT PAGE WHEN NOT FOUND */}
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}

export default Routes
