import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/layout'

const Home = lazy(() => import('../views/home'))
const Quote = lazy(() => import('../views/quote'))
const Member = lazy(() => import('../views/member'))
const SignIn = lazy(() => import('../views/signin'))
const SignUp = lazy(() => import('../views/signup'))

const App = () => {

  return (
    <BrowserRouter>
      
      <Layout>
        <Suspense fallback={ <div>Loading...</div> }>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/quote" component={ Quote } />
            <Route path="/member" component={ Member } />

            <Route path="/sign-in" component={ SignIn } />
            <Route path="/sign-up" component={ SignUp } />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
