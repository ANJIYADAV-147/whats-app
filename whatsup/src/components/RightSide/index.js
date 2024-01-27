import {Route} from 'react-router-dom'
import RightFooter from '../RightFooter'
import RightHeader from '../RightHeader'
import './index.css'


const RightSide=()=>(
    
    
    <div className='right-side-container'>
        <RightHeader/>
        <div className='messages-container'>
           
        </div>
        <RightFooter/>
    </div>
    )
    
export default RightSide