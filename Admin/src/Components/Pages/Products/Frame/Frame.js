import React, { useState, useEffect } from 'react'
import './Frame.css'
import ToppingItem from './ToppingItem/ToppingItem'

export default function Frame() {

  const toppings = [
    'Trân Châu Trắng',
    'Thạch Cà Phê',
    'Hương Vani',
    'Hạt Dẻ',
  ]

  const [topping, setTopping] = useState(toppings)

  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const [newTopping, setNewTopping] = useState('')
  const handleSetTopping = (event) => {
    setNewTopping(event.target.value)
  }

  const handleAddTopping = (event) => {
    event.preventDefault()
    setTopping([newTopping, ...topping])
  }

  return (
    <div className='Frame'>
      <div className='titleFrame'>Add Product</div>
      <div className='titlesFrame'>
        <p>Product name</p>
        <p>Type</p>
        <p>Price</p>
        <p>Topping</p>
      </div>
      <input className='input input-1' spellCheck='false' />
      <input className='input input-2' spellCheck='false' />
      <input className='input input-3' spellCheck='false' />
      <form onSubmit={handleAddTopping} className='toppingFrame'>
        <div className='showTopping'>
          {topping.map((values, index) => (
            <ToppingItem values={values} index={index} />
          ))}
        </div>
        <input onChange={handleSetTopping} className='addNewInput' placeholder='Add new topping' spellCheck='false'></input>
      </form>
      <div className='imageProduct'>
        <div className='images'>
          <img src={img} />
        </div>
        <label for='choosefile' className='chooseFile'>Choose file</label>
        <input hidden id='choosefile' type='file' onChange={onImageChange} />
      </div>
      <button className='clear' >Clear</button>
      <button className='save' >Save</button>
    </div>
  )
}
