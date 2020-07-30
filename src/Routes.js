import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from 'Containers/Home'

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/place" component={Home} />
    </Switch>
  </Router>
)
