import './PRODUCT.css';
import SideBar from './SideBar/SideBar'
import Main from './Main/Main';
import Cart from './Cart/Cart'
import { useState } from 'react';


export default function PRODUCT(props) {
  const [click, setClick] = useState(0)

  const handleClick = (data) => {
    setClick(data)
    window.scrollTo(0, 0)
  }

  // ======================================
  const [clickCart, setClickCart] = useState([])
  const handleCallBack = (data) => {
    console.log(data)
    let temp = data[3]
    data[3] = data[4]
    data[4] = temp

    temp = data[4]
    data[4] = data[5]
    data[5] = temp

    temp = data[5]
    data[5] = data[6]
    data[6] = temp

    setClickCart(data)
    // console.log(data)
  }
  // ======================================

  const sendPay = (data) => {
    props.callBackPay(data)
  }

  return (
    <div className="PRODUCT">
      <div className="left">
        <SideBar className='sideBar' callBack={handleClick} />
      </div>
      <Main page={click} callBack={handleCallBack} />
      <div className='right'>
        <Cart className='sectionCart' data={clickCart} callBackPay={sendPay} />
      </div>
    </div>
  );
}

