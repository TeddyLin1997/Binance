import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../views/layout'

const App = () => {
  return (
    <BrowserRouter>
      
      <Layout>
        <Switch>
          <Route path="/" />
          <Route path="/market" />
          <Route path="/member" />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
