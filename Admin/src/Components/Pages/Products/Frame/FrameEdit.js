import React, { useState, useEffect } from 'react'
import './Frame.css'
import ToppingItem from './ToppingItem/ToppingItem'

export default function FrameEdit(props) {

  // const toppings = [
  //   'Trân Châu Trắng',
  //   'Thạch Cà Phê',
  //   'Hương Vani',
  //   'Hạt Dẻ',
  // ]

  //[props.productName, props.type, props.price, props.topping, props.image]


  const [topping, setTopping] = useState(props.data[3])

  const [img, setImg] = useState(props.data[4]);

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
  // {props.data[0]}
  // {props.data[1]}
  // {props.data[2]}
  // console.log(topping)
  return (
    <div className='Frame'>
      <div className='titleFrame'>Edit Product</div>
      <div className='titlesFrame'>
        <p>Product name</p>
        <p>Type</p>
        <p>Price</p>
        <p>Topping</p>
      </div>
      <input className='input input-1' spellCheck='false' placeholder={props.data[0]}></input>
      <input className='input input-2' spellCheck='false' placeholder={props.data[1]}></input>
      <input className='input input-3' spellCheck='false' placeholder={props.data[2]}></input>
      <form onSubmit={handleAddTopping} className='toppingFrame'>
        <div className='showTopping'>
          {topping[0].length > 0 && topping.map((values, index) => (
            <ToppingItem values={values} index={index} />
          ))}
        </div>
        <input onChange={handleSetTopping} className='addNewInput' placeholder='Add new topping' spellCheck='false'></input>
      </form>
      <div className='imageProduct'>
        <div className='images'>
          <img src={img} alt='' />
        </div>
        <label for='choosefile' className='chooseFile'>Choose file</label>
        <input hidden id='choosefile' type='file' onChange={onImageChange} />
      </div>
      <button className='clear' >Clear</button>
      <button className='save' >Save</button>
    </div>
  )
}
