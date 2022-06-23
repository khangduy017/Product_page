import { useEffect, useState } from 'react'
import './Cart.css'
import TagInCart from './TagInCart/TagInCart'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookie = new Cookies()
export default function Cart(props) {

  const [note, setNote] = useState('')
  const handleEnteredNote = (event) => {
    setNote(event.target.value)
  }

  const [orders, setOrders] = useState(false)
  const [total2, setTotal2] = useState(0)
  const [listCart, setListCart] = useState('')

  //amount={value[1]} topping={value[2]} src={value[3]} name={value[4]} price={value[5]}
  // "productName": listCart[i][4],
  // "image": listCart[i][3],
  // "quantity": listCart[i][1],
  // "topping": listCart[i][2],
  // "price": listCart[i][5],
  useEffect(() => {
    if (cookie.get("JWT")) {
      const headers = {
        'Authorization': `Bearer ${cookie.get("JWT")}`
      }
      axios.get('http://192.168.1.203:3000/tcf/v1/cart/getcart', { headers: headers }).then((res) => {
        if (res.data.length > 0) {
          // console.log('Nhan', res.data[0])
          const temp = []
          for (let i in res.data[0].products) {
            const child = [0, 0, 0, 0, 0, 0, 0]
            child[1] = res.data[0].products[i].quantity
            child[2] = res.data[0].products[i].topping
            child[3] = res.data[0].products[i].image
            child[4] = res.data[0].products[i].productName
            child[5] = res.data[0].products[i].price
            child[6] = res.data[0].products[i].note
            temp.push(child)
          }
          setListCart(temp)
          setTotal2(res.data[0].totalPrice)
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }, [])

  const sendCart = () => {
    // console.log(listCart)
    if (cookie.get("JWT")) {
      const headers = {
        'authorization': `Bearer ${cookie.get("JWT")}`
      }
      let products = []
      for (let i in listCart) {
        if (listCart[i][1] > 0) {
          const object = {
            "productName": listCart[i][4],
            "image": listCart[i][3],
            "quantity": listCart[i][1],
            "topping": listCart[i][2],
            "price": listCart[i][5],
            "note": listCart[i][6]
          }
          products.push(object)
        }
      }
      // console.log('ok')
      // console.log(products)
      const object = { 'products': products, "totalPrice": total2 }

      // console.log(object)
      axios.post('http://192.168.1.203:3000/tcf/v1/cart/shopping-cart', object, { headers: headers }).then((res) => {

      }).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (props.data.length > 0) {
      setListCart([...listCart, props.data])
    }
  }, [props.data])

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < listCart.length; i++) {
      sum += (listCart[i][5].slice(0, -1) * 1 + (listCart[i][2] === '' ? 0 :
        (listCart[i][2] === 'Trân Châu Trắng' || listCart[i][2] === 'Thạch Cà Phê') ? 7 : 10)) * listCart[i][1]
    }

    setTotal2(sum)
    if (sum > 0) setOrders(true)

  }, [listCart.length])

  useEffect(() => {
    if (orders) {
      sendCart()
      setOrders(false)
    }
  }, [orders])

  const handleCallBack1 = (data) => {
    listCart[data][1]++
    let topping = 0
    if (listCart[data][2] === 'Hương Vani' || listCart[data][2] === 'Hương Hạt Dẻ') topping += 10
    else if (listCart[data][2] === 'Trân Châu Trắng' || listCart[data][2] === 'Thạch Cà Phê') topping += 7
    listCart[data][0] += 1 * listCart[data][5].slice(0, -1) + topping
    setTotal2(total2 + 1 * listCart[data][5].slice(0, -1) + topping)
    setOrders(true)
  }

  const handleCallBack2 = (data) => {
    listCart[data][1]--
    if (listCart[data][1] <= 0) {
      let temp = []
      for (let i = 0; i < listCart.length; i++) {
        if (i !== data) {
          temp.push(listCart[i])
        }
      }
      setListCart(temp)
      setTotal2(0)
      setOrders(true)
    }
    else {
      let topping = 0
      if (listCart[data][2] === 'Hương Vani' || listCart[data][2] === 'Hương Hạt Dẻ') topping += 10
      else if (listCart[data][2] === 'Trân Châu Trắng' || listCart[data][2] === 'Thạch Cà Phê') topping += 7
      listCart[data][0] -= 1 * listCart[data][5].slice(0, -1 - topping)
      setTotal2(total2 - 1 * listCart[data][5].slice(0, -1) - topping)
      setOrders(true)
    }
  }


  const handlePay = () => {
    let products = []
    for (let i in listCart) {
      if (listCart[i][1] > 0) {
        const object = {
          "productName": listCart[i][4],
          "image": listCart[i][3],
          "quantity": listCart[i][1],
          "topping": listCart[i][2],
          "price": listCart[i][5],
          "note": listCart[i][6]
        }
        products.push(object)
      }
    }
    props.callBackPay(products)
  }


  return <div className='CartPay sectionCart'>
    <div className='Cart'>
      {/* ==================================================================================== */}
      <div className='cart'>
        <div className='section-title'>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_469_7066)">
              <path d="M14 14H3C2.4475 14 2 13.5525 2 13V5C2 4.4475 2.4475 4 3 4H17C17.3275 4 17.635 4.16 17.8225 4.43C18.01 4.7 18.0525 5.0425 17.9375 5.35L14.9375 13.35C14.7925 13.74 14.4175 14 14 14ZM4 12H13.3075L15.5575 6H4V12Z" fill="white" />
              <path d="M4 5H2V2H0V0H3C3.5525 0 4 0.4475 4 1V5Z" fill="white" />
              <path d="M15 18H3C2.4475 18 2 17.5525 2 17V13H4V16H15V18Z" fill="white" />
              <path d="M9 17H7V20H9V17Z" fill="white" />
              <path d="M13 17H11V20H13V17Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_469_7066">
                <rect width="18" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>giỏ hàng của bạn</p>
        </div>
        <div className='main1'>
          {(listCart.length !== 0) &&
            listCart.map((value, index) => (
              <TagInCart callBack1={handleCallBack1} callBack2={handleCallBack2} key={index} i={index} amount={value[1]} topping={value[2]} src={value[3]} name={value[4]} price={value[5]} />
            ))
          }

        </div>
      </div>
      {/* ==================================================================================== */}
      <div className='total'>
        <div className='section-title'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20C4.485 20 0 15.515 0 10C0 4.485 4.485 0 10 0C15.515 0 20 4.485 20 10C20 15.515 15.515 20 10 20ZM10 2C5.59 2 2 5.59 2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2Z" fill="white" />
            <path d="M12 14H7V12H11V11H8C7.4475 11 7 10.5525 7 10V7C7 6.4475 7.4475 6 8 6H13V8H9V9H12C12.5525 9 13 9.4475 13 10V13C13 13.5525 12.5525 14 12 14Z" fill="white" />
            <path d="M11 5H9V7H11V5Z" fill="white" />
            <path d="M11 13H9V15H11V13Z" fill="white" />
          </svg>
          <p>tổng đơn hàng</p>
        </div>
        <div className='main2'>
          {(total2 > 0) && <p >Tổng cộng</p>}
          {(total2 > 0) && <p style={{ color: 'red' }}>{total2}.000đ</p>}
        </div>

      </div>
      {/* ==================================================================================== */}
      <div className='note'>
        <div className='section-title'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.06932 20C0.788688 20 0.51607 19.8904 0.312942 19.6873C0.0483427 19.4227 -0.0585663 19.0351 0.0323064 18.6717L1.1014 14.3953C1.14951 14.2082 1.24572 14.0345 1.38203 13.8982L12.0729 3.20727C12.4899 2.79033 13.1661 2.79033 13.5857 3.20727L16.793 6.41454C17.2099 6.83149 17.2099 7.50768 16.793 7.9273L6.10206 18.6182C5.96576 18.7545 5.79203 18.8534 5.60494 18.8988L1.32858 19.9679C1.24305 19.9893 1.15485 20 1.06932 20ZM3.10327 15.1998L2.53932 17.4609L4.80045 16.8943L14.5238 7.17092L12.8293 5.47641L3.10327 15.1998Z" fill="white" />
            <path d="M15.7229 7.20129e-05L14.2109 1.51199L18.4878 5.78884L19.9997 4.27692L15.7229 7.20129e-05Z" fill="white" />
          </svg>
          <p>ghi chú</p>
        </div>
      </div>
      <div className='main3'>
        <textarea onChange={handleEnteredNote} placeholder={"Ghi chú......."} className='main3-note'></textarea>
      </div>
    </div>
    <button onClick={handlePay} className='Pay'>thanh toán</button>
  </div>
}