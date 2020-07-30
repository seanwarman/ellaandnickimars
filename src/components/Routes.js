import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from 'Containers/Home'

export default () => (
  <Router>
    <Route path="/" component={Home} />
  </Router>
)
