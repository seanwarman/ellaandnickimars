import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from '../components/Routes.js'
import Layout from '../components/Layout.js'

import './Root.css'

const Root = () => (

  <Router>
    <Layout>
      <Routes />
    </Layout>
  </Router>

)


export default Root
