import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from './routes'
import './App.css'

const App = () => {
  return (
    <Routes>
      {routes?.map(i => (<Route key={i.name} path={i.path} exact={i.exact} element={<i.component />} />))}
    </Routes>
  )
}

export default App