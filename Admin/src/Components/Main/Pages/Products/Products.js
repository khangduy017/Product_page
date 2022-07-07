import './Products.css'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { Socket } from 'socket.io'
import io from 'socket.io-client'
import cafe from '../../../../Images/cafe.png'
import tea from '../../../../Images/tea.png'
import ice from '../../../../Images/ice.png'
import soda from '../../../../Images/soda.png'
import cake from '../../../../Images/cake.png'
const socket = io.connect("http://192.168.254.1:3000")

export default function Products() {

  const [dataS, setData] = useState('')


  useEffect(() => {
    const headers = {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzMwOWJhYmZmM2JmNDIxY2M1YTRlYyIsImlhdCI6MTY1Njk1NTI3MSwiZXhwIjoxNjY0NzMxMjcxfQ.bBWf9XiD4OMJyLSBApRHnc6c7lBgQFy8sTqFrjIqXjk`
    }
    axios.get('http://192.168.254.1:3000/tcf/v1/admin/history-ad', { headers: headers }).then((res) => {
      setData(res.data.History)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const sendStage = (object) => {
    const headers = {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzMwOWJhYmZmM2JmNDIxY2M1YTRlYyIsImlhdCI6MTY1Njk1NTI3MSwiZXhwIjoxNjY0NzMxMjcxfQ.bBWf9XiD4OMJyLSBApRHnc6c7lBgQFy8sTqFrjIqXjk`
    }
    axios.post('http://192.168.254.1:3000/tcf/v1/admin/update-status', object, { headers: headers }).then((res) => {
      console.log(res.data.update)
      setData((prevData) => prevData.map((element) => (element._id === res.data.update._id) ? res.data.update : element))
    }).catch(error => {
      console.log(error)
    })
  }

  // useEffect(() => {
  //   socket.on("order", (data) => {
  //     console.log(data)
  //     setData([...dataS, data])
  //   });
  // }, [])


  return (
    <div className='Products'>
      <div className='productsTitle'>Products Management</div>
      <div className='productsInformation'>

        <div className='pi pi-1'>
          <p className='piTitle'>coffee</p>
          <p className='piAmount'>3</p>
          <div className='piIcon'>
            <img src={cafe} alt='' />
          </div>
        </div>
        <div className='pi pi-2'>
          <p className='piTitle'>ice blended</p>
          <p className='piAmount'>2</p>
          <div className='piIcon'>
            <img src={ice} alt='' />
          </div>
        </div>
        <div className='pi pi-3'>
          <p className='piTitle'>tea</p>
          <p className='piAmount'>2</p>
          <div className='piIcon'>
            <img src={tea} alt='' />
          </div>
        </div>
        <div className='pi pi-4'>
          <p className='piTitle'>soda</p>
          <p className='piAmount'>24</p>
          <div className='piIcon'>
            <img src={soda} alt='' />
          </div>
        </div>

        <div className='pi pi-5'>
          <p className='piTitle'>cake</p>
          <p className='piAmount'>32</p>
          <div className='piIcon'>
            <img src={cake} alt='' />
          </div>
        </div>
      </div>
      <div className='recentOrdersProducts'>
        <div className='recentOrdersTitleProducts'>
          <p>Products</p>
          <button>Add New</button>
        </div>
        <div className='recentOrdersName'>
          <p className='stt'>STT</p>
          <p className='image'>Image</p>
          <p className='productName'>Product Name</p>
          <p className='type'>Type</p>
          <p className='topping'>Topping</p>
          <p className='price'>Price</p>
          <p className='action'>Action</p>
        </div>
        <div className='main'>
          {/* {dataS.length > 0 && dataS.map((values, index) => (
            <Item key={index}
              id={values._id}
              paymentMethod={values.methodDelivery}
              date={values.dateOrder}
              total={values.totalPrice}
              stage={values.status}
              callback={sendStage}
            />
          ))} */}
        </div>
      </div>
    </div>
  )
}
