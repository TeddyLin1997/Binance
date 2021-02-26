import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from '../views/layout'
import Home from '../views/home'
import About from '../views/about'
import Article from '../views/article'

function App () {
  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route path="/" component={ Home }></Route>
        <Route path="/about" component={ About }></Route>
        <Route path="/article" component={ Article }></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App