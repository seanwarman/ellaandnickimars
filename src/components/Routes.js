import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import BuildingAMartianHouse from '../containers/BuildingAMartianHouse.js'

export default () => (

  <Fragment>
    <Route exact path="/" component={BuildingAMartianHouse} />
  </Fragment>

)
