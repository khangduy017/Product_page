import './AllProduct.css'
import CaPhe from '../Product/CaPhe'
import DaXay from '../Product/DaXay'

export default function Products(props) {

  return <div className='AllProduct'>
    {<CaPhe />}
    {<DaXay />}
  </div>
}