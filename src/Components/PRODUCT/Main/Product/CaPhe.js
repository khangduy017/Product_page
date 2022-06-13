import '../AllProduct/AllProduct.css'

import Card from './Card/Card'


import cpv1 from '../../../../Image/products/1/1.1.1.jpg'
import cpv2 from '../../../../Image/products/1/1.1.2.jpg'
import cpv3 from '../../../../Image/products/1/1.1.3.jpg'
import cpv4 from '../../../../Image/products/1/1.1.3.jpg'
import cpv5 from '../../../../Image/products/1/1.1.4.jpg'
import cpv6 from '../../../../Image/products/1/1.1.4.jpg'
import cpv7 from '../../../../Image/products/1/1.1.5.jpg'

import cpy1 from '../../../../Image/products/1/1.1.2.jpg'
import cpy2 from '../../../../Image/products/1/1.1.3.jpg'
import cpy3 from '../../../../Image/products/1/1.2.1.jpg'
import cpy4 from '../../../../Image/products/1/1.1.3.jpg'
import cpy5 from '../../../../Image/products/1/1.1.4.jpg'
import cpy6 from '../../../../Image/products/1/1.2.2.jpg'
import cpy7 from '../../../../Image/products/1/1.2.1.jpg'

export default function CaPhe(props) {

  const cpv = [
    {
      src: cpv1,
      name: 'TFC Coffee',
      price: '45.000'
    }, {
      src: cpv2,
      name: 'Cà Phê Đen',
      price: '29.000'
    }, {
      src: cpv3,
      name: 'Cà Phê Sữa',
      price: '32.000'
    }, {
      src: cpv4,
      name: 'Cà Phê Sữa Hạt Dẻ',
      price: '52.000'
    }, {
      src: cpv5,
      name: 'Bạc Xỉu',
      price: '39.000'
    }, {
      src: cpv6,
      name: 'Bạc Xỉu Hạt Dẻ',
      price: '39.000'
    },
    {
      src: cpv7,
      name: 'Bạc Xỉu Bạc Hà',
      price: '39.000'
    }
  ]

  const cpy = [
    {
      src: cpy1,
      name: 'Espresso',
      price: '25.000'
    },
    {
      src: cpy2,
      name: 'Americano',
      price: '33.000'
    },
    {
      src: cpy3,
      name: 'Mocha',
      price: '36.000'
    },
    {
      src: cpy4,
      name: 'Caramel Macchiato',
      price: '47.000'
    }, {
      src: cpy5,
      name: 'Macchiato',
      price: '28.000'
    }, {
      src: cpy6,
      name: 'Cappuccino',
      price: '36.000'
    }, {
      src: cpy7,
      name: 'Latte',
      price: '36.000'
    }
  ]

  return <div className='CaPhe'>
    <p className='title'>Cà Phê Việt</p>
    <div className='tag cpv'>
      {cpv.map((item, index) => (
        <Card key={index} src={item.src} name={item.name} price={item.price} />
      ))}
    </div>
    <p className='title'>Cà Phê Ý</p>
    <div className='tag cpy'>
      {cpy.map((item, index) => (
        <Card key={index} src={item.src} name={item.name} price={item.price} />
      ))}
    </div>
  </div>
}