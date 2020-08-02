import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import BuildingAMartianHouse from '../containers/BuildingAMartianHouse.js'
import TheWorldAndMars from '../containers/TheWorldAndMars.js'
import SpaceForTrees from '../containers/SpaceForTrees.js'
import TheLaunches from '../containers/TheLaunches.js'
import TotalEclipseOfTheHead from '../containers/TotalEclipseOfTheHead.js'
import ADecadeWithMars from '../containers/ADecadeWithMars.js'

export default () => (

  <Fragment>
    <Route exact path="/" component={BuildingAMartianHouse} />
    <Route path="/theworldandmars" component={TheWorldAndMars} />
    <Route path="/spacefortrees" component={SpaceForTrees} />
    <Route path="/thelaunches" component={TheLaunches} />
    <Route path="/totaleclipseofthehead" component={TotalEclipseOfTheHead} />
    <Route path="/adecadewithmars" component={ADecadeWithMars} />
  </Fragment>

)
