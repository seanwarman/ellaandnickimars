import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BuildingAMartianHouse from '../containers/BuildingAMartianHouse.js'

export default () => (

  <Switch>
    <Route path="/" component={BuildingAMartianHouse} />
  </Switch>


)
