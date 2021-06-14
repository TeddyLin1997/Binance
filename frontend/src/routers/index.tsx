import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '@/views/layout'
import Loading from '@/components/loading'
import { getUserInfoService } from '@/api/user'
import { setUserInfo, clearUser } from 'action/user'

const Home = lazy(() => import('@/views/home'))
const Quote = lazy(() => import('@/views/quote'))
const Member = lazy(() => import('@/views/member'))
const SignIn = lazy(() => import('@/views/signin'))
const SignUp = lazy(() => import('@/views/signup'))

const App = () => {
  const dispatch = useDispatch()

  const isLogin = useSelector((state: RootState) => state.user.account) !== ''
  const token = useSelector((state: RootState) => state.user.token)

  useEffect(() => {
      if (token === '' || isLogin) return 

      getUserInfo()
      async function getUserInfo () {
        const result = await getUserInfoService(token)

        if (result.error) dispatch(clearUser())
        else dispatch(setUserInfo(result.result))
      }
  }, [token])

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={ <Loading /> }>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/quote" component={ Quote } />
            <Route path="/member" render={ () => isLogin ? <Member /> : <Redirect to="/" /> } />

            <Route path="/sign-in" component={ SignIn } />
            <Route path="/sign-up" component={ SignUp } />

            {/* test page */}
            <Route path="/test" component={ Loading } />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App