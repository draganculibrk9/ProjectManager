import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Toaster from './components/Toaster'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Project from './components/Project'

const App = () => {
  return (
      <div className='container'>
        <Toaster/>
          <Navbar/>
          <div style={{ marginTop: '2%' }}>
        <Switch>
          <Route exact path='/projects/:id'>
            <Project/>
          </Route>
          <Route exact path='/projects'>
            <Projects/>
          </Route>
          <Route exact path='*'>
            <Redirect to='/projects'/>
          </Route>
        </Switch>
          </div>
      </div>
  )
}

export default App
