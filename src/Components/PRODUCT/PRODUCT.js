import './PRODUCT.css';
import SideBar from './SideBar/SideBar'
import Main from './Main/Main';
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
      <Main page={click} />
      <div className='right'>
      </div>
    </div>
  );
}
