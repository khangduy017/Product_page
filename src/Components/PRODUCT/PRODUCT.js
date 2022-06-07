import './PRODUCT.css';
import SideBar from './SideBar/SideBar'
import { useState } from 'react';

export default function PRODUCT() {
  const [click, setClick] = useState(0)

  const handleClick = (data) => {
    setClick(data)
  }


  return (
    <div className="PRODUCT">
      <div className="left">
        <SideBar className='sideBar' callBack={handleClick} />
      </div>
      <div className='main'>

      </div>
      <div className='right'>
      </div>
    </div>
  );
}

