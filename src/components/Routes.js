import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import BuildingAMartianHouse from '../containers/BuildingAMartianHouse.js'

export default () => (
  <Router>
    <Route path="/" component={BuildingAMartianHouse} />
  </Router>
)
