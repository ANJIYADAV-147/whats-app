import './index.css'
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";


const RightFooter=()=>(
    <>
    <div className='footer-container'>
        <FaRegFaceSmile size={25} className='icons'/>
        <FaPlus size={25} className='icons'/>
        <div className='text-container'>
            <input type='text' className='text-input' placeholder='Type a message'/>
        </div>
        <FaMicrophone size={25}/>
    </div>
    </>
)
export default RightFooter