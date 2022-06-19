import './AllProduct.css'
import { useEffect, useState } from 'react'
import CaPhe from '../Product/CaPhe'
import DaXay from '../Product/DaXay'
import SodaMojito from '../Product/SodaMojito'
import TCFCake from '../Product/TCFCake'
import Tra from '../Product/Tra'


export default function Products(props) {

  const [data, setData] = useState(props.dataS)
  // const [scrollB, setScrollB] = useState(1)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 6000) setScrollB(5)
  //     else if (window.scrollY >= 4000) setScrollB(4)
  //     else if (window.scrollY >= 2000) setScrollB(3)
  //     else if (window.scrollY >= 1000) setScrollB(2)
  //   }
  //   window.addEventListener('scroll', handleScroll)
  // }, [])

  // ======================================
  const handleCallBack = (data) => {
    props.callBack(data)
  }
  // ======================================
  return <div className='AllProduct'>
    {<CaPhe callBack={handleCallBack} dataS={data} />}
    {<DaXay callBack={handleCallBack} dataS={data} />}
    {<Tra callBack={handleCallBack} dataS={data} />}
    {<SodaMojito callBack={handleCallBack} dataS={data} />}
    {<TCFCake callBack={handleCallBack} dataS={data} />}
  </div>
}
