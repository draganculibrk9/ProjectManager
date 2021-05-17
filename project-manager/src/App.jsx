import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Toaster from './components/Toaster'

const App = () => {
  return (
      <div className='container'>
        <Toaster/>
        <Switch>
          <Route exact path='/projects/:id'>
            <p>project</p>
          </Route>
          <Route exact path='/projects'>
            <p>projects component</p>
          </Route>
          <Route exact path='*'>
            <Redirect to='/projects'/>
          </Route>
        </Switch>
      </div>
  )
}

export default App
