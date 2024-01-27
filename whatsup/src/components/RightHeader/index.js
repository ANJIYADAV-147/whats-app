import {Route} from 'react-router-dom'
import './index.css'
import { IoVideocam } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const RightHeader=(props)=>{
    const {name,userProfileUrl}=props
    return(
    <div className='rightHeader-container'>
        <div className='profile-container'>
        <img src={userProfileUrl} alt='userProfileUrl' />
        <p>{name}</p>
        </div>
        <div className='search-menu-call-container'>
            <IoVideocam size={25} className='icons'/>
            <IoMdSearch size={25} className='icons'/>
            <IoMdMenu size={25} className='icons'/>
        </div>  
    </div>
    )
}
export default RightHeader