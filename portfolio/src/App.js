import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import SinglePost from './components/SinglePost.js'
import Post from './components/Post.js'
import Project from './components/Project.js'
import NavBar from './components/NavBar.js'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
