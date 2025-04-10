import React from 'react'
import { Route, Routes } from 'react-router'
import ResponsiveDrawer from "./Layout/ResponsiveDrawer"
import { routes } from './routes'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<ResponsiveDrawer />}>
            {routes.map((item)=>(
                <Route key={item.id} path={item.path} element={<item.element />} />
            ))}
        </Route>
    </Routes>
  )
}

export default Router