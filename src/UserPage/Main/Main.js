import React from 'react'
import './Main.css'
import Account from './Pages/Account/Account'
// import Change from './Pages/Change/Change'
import Orders from './Pages/Orders/Orders'
import Promotion from './Pages/Promotion/Promotion'
import LogOut from './Pages/LogOut/LogOut'

function Main(props) {
  console.log(props.page)
  return (
    <div className='Main'>
      {(props.page === 1 || props.page === 2) && <Account page={props.page} />}
      {props.page === 3 && <Orders />}
      {props.page === 4 && <Promotion />}
      {props.page === 5 && <LogOut />}
    </div>
  )
}

export default Main