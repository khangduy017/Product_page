import React from 'react'
import './Main.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import Customers from './Pages/Customers/Customers'
import Products from './Pages/Products/Products'


function Main() {
  return (
    <div className='Main'>
      <Products />
      {/* <Dashboard /> */}
      {/* <Customers /> */}
    </div>
  )
}

export default Main