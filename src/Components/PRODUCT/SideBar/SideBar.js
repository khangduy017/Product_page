import { useState } from 'react'
import style from './SideBar.module.css'

export default function SideBar(props) {

  const [click, setClick] = useState(0)
  const sendData = (v) => {
    props.callBack(v)
    setClick(v)
  }

  return <div className={style.SideBar + ' ' + props.className}>
    <div onClick={() => sendData(1)} className={style.section + ' ' + ((click === 1) && style.choose)} >
      <h3 className={style.title} >Cà Phê</h3>

    </div>

    <div className={style.section + ' ' + ((click === 2) && style.choose)} onClick={() => sendData(2)}>
      <h3 className={style.title} >Đá Xay</h3>

    </div>

    <div className={style.section + ' ' + ((click === 3) && style.choose)} onClick={() => sendData(3)}>
      <h3 className={style.title} >Trà</h3>

    </div>

    <div className={style.section + ' ' + ((click === 4) && style.choose)} onClick={() => sendData(4)}>
      <h3 className={style.title4} >Soda & Mojito</h3>

    </div>

    <div className={style.section + ' ' + ((click === 5) && style.choose)} onClick={() => sendData(5)}>
      <h3 className={style.title4} >Matcha</h3>

    </div>

    <div className={style.section + ' ' + ((click === 6) && style.choose)} onClick={() => sendData(6)}>
      <h3 className={style.title} >Món Khác</h3>

    </div>

    <div className={style.section + ' ' + ((click === 7) && style.choose)} onClick={() => sendData(7)}>
      <h3 className={style.title} >TCF Cake</h3>

    </div>
  </div>
}