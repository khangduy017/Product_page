import React from 'react'

function Customers() {
  return (
    <div className='Customer'>
      <h1 className='title'>Customers</h1>
      <div className='list-title'>
        <p>Avatar</p>
        <p>Id User</p>
        <p>Name</p>
        <p>Address</p>
        <p>Phone</p>
        <p>Email</p>
      </div>
      {/* {list.map((value, index) => (
        <div key={index} className='list'>
          <p>{value.name}</p>
          <p>{value.amount}</p>
          <p>{value.total}</p>
          <p>{value.status}</p>
          <p>{value.date}</p>
          <p>{value.address}</p>
          <p>{value.phone}</p>
        </div>
      ))} */}
    </div>
  )
}

export default Customers