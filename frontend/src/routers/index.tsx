import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '@/views/layout'
import Loading from '@/components/loading'
import { setUserInfo, clearUser } from 'action/user'
import { setBalance } from 'action/balance'
import { getUserInfoService } from '@/api/user'
import { getAssetsBalance } from '@/api/assets'

const Home = lazy(() => import('@/views/home'))
const Quote = lazy(() => import('@/views/quote'))
const Member = lazy(() => import('@/views/member'))
const SignIn = lazy(() => import('@/views/signin'))
const SignUp = lazy(() => import('@/views/signup'))

const App = () => {
  const dispatch = useDispatch()
  const isLogin = useSelector((state: RootState) => state.user.token) !== ''

  useEffect(() => {
      if (isLogin === false) return 

      (async function getUserInfo () {
        const allResult = await Promise.all([
          getUserInfoService(),
          getAssetsBalance(),
        ])
        
        if (allResult[0].status === 401) {
          dispatch(clearUser())
          return
        }

        if (typeof allResult[0].result !== 'string') dispatch(setUserInfo(allResult[0].result))
        if (typeof allResult[1].result !== 'string') dispatch(setBalance(allResult[1].result))
      })()
  }, [isLogin])

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