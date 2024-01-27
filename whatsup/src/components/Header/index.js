import { RiMenuFill } from "react-icons/ri";
import './index.css'

const Header=()=>(
    <>
    <div className='Header-container'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' className='logo' alt='logo'/>
        <RiMenuFill size={20} />
    </div>
    </>
)
export default Header