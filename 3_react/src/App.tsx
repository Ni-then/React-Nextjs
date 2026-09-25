import React from 'react'
import Auth from './screens/Auth'
import {BrowserRouter,Routes,Route} from "react-router"
import Dashboard from './screens/Dashboard'

const App = () => {
  // it will work only on first render , thats why we need to use react-router
  // if(window.originAgentCluster.location = "/signin"){
  //   return <Auth/>
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Auth/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App