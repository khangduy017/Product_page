import '../AllProduct/AllProduct.css'
import Card from './Card/Card'
import { useState, useEffect } from 'react'
import Frame from '../FrameProduct/Frame/Frame'

export default function DaXay(props) {


  const [information, setInformation] = useState([])

  const handleClick = (data) => {
    setInformation(data)
    setHidden(1)
  }

  const [hidden, setHidden] = useState(1)
  const handleHidden = (a) => {
    setHidden(a)
  }

  // ======================================
  const handleCallBack = (data) => {
    setHidden(0)
    props.callBack([...data, information[0], information[1], information[2]])
  }
  // ======================================

  const [object, setObject] = useState('')
  const [object2, setObject2] = useState('')
  useEffect(() => {
    for (let i = 0; i < props.dataS.length; i++) {
      if (props.dataS[i].title === "Đá Xay") {
        setObject(props.dataS[i])
      }
      if (props.dataS[i].title === "Yogurt Đá Xay") {
        setObject2(props.dataS[i])
      }
    }
  }, [])

  if (object && object2)
    return <div className='DaXay'>
      <p className='title'>{object.title}</p>
      <div className='tag dx'>
        {object.content.map((item, index) => (
          <Card key={index} src={object.img[index]} name={object.content[index]} price={object.price[index]} callBack={handleClick} />
        ))}
      </div>
      <p className='title'>{object2.title}</p>
      <div className='tag ydx'>
        {object2.content.map((item, index) => (
          <Card key={index} src={object2.img[index]} name={object2.content[index]} price={object2.price[index]} callBack={handleClick} />
        ))}
      </div>
      {(hidden === 1 && information.length !== 0) && <div className='overlay' onClick={() => handleHidden(0)} />}
      {(hidden === 1 && information.length !== 0) && <div className='floatFrame'>
        <Frame callBack={handleCallBack} src={information[0]} name={information[1]} price={information[2]} />
      </div>}
    </div>
}