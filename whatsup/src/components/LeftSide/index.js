import {Component} from 'react'
import {Link} from 'react-router-dom'
import { IoSearch } from "react-icons/io5";


import Header from '../Header'
import './index.css'

const contactList=[
    {
        id:1,
        name:'Rahul',
        userProfileUrl:'https://bit.ly/4b9b3jb',
        time:'12:00'
    },
    {
        id:2,
        name:'Rohith',
        userProfileUrl:'https://bit.ly/3Hz5P2x', 
        time:'12:23'
    },
    {
        id:3,
        name:'Rakesh',
        userProfileUrl:'https://th.bing.com/th/id/OIP.lA8zhfFpcUqEqM1UpbKojQHaHG?rs=1&pid=ImgDetMain', 
        time:'11:50'
    },
    {
        id:4,
        name:'Naga Prem Sai',
        userProfileUrl:'https://th.bing.com/th/id/OIP.f9WDNDM6y23SF1ngEC7tJAHaGB?&rs=1&pid=ImgDetMain', 
        time:'01:38'
    },
    {
        id:5,
        name:'Anji Yadav',
        userProfileUrl:'https://bit.ly/4b9b3jb',
        time:'12:00'
    },
    {
        id:6,
        name:'Anil',
        userProfileUrl:'https://bit.ly/3Hz5P2x', 
        time:'12:23'
    },
    {
        id:7,
        name:'Shiva',
        userProfileUrl:'https://th.bing.com/th/id/OIP.lA8zhfFpcUqEqM1UpbKojQHaHG?rs=1&pid=ImgDetMain', 
        time:'11:50'
    },
    {
        id:8,
        name:'Nikhil',
        userProfileUrl:'https://th.bing.com/th/id/OIP.f9WDNDM6y23SF1ngEC7tJAHaGB?&rs=1&pid=ImgDetMain', 
        time:'01:38'
    },
    {
        id:9,
        name:'Jashwanth',
        userProfileUrl:'https://bit.ly/4b9b3jb',
        time:'12:00'
    },
    {
        id:10,
        name:'Uday',
        userProfileUrl:'https://bit.ly/3Hz5P2x', 
        time:'12:23'
    },
    {
        id:11,
        name:'sunny',
        userProfileUrl:'https://th.bing.com/th/id/OIP.lA8zhfFpcUqEqM1UpbKojQHaHG?rs=1&pid=ImgDetMain', 
        time:'11:50'
    },
    {
        id:12,
        name:'Praneeth',
        userProfileUrl:'https://th.bing.com/th/id/OIP.f9WDNDM6y23SF1ngEC7tJAHaGB?&rs=1&pid=ImgDetMain', 
        time:'01:38'
    },
]

class LeftSide extends Component{

    state={
        searchInput:'',
    }
    
    onChangeSearch=(event)=>{
        this.setState({searchInput:event.target.value})
    }
    render(){
        const {searchInput}=this.state
    return(
        <div className='left-side-container'>
            <Header/>
            <div className='search-container'>
                <IoSearch size='20'/>
            <input type='search' className='search-input' placeholder='search or start new start' onChange={this.onChangeSearch} value={searchInput}/>
            </div>
            <hr className="line"/>
            <div className="contacts-profiles-list">
                <ul  type='none'  >
                {contactList.map(eachDetails=>(
                        <li  key={eachDetails.id} >
                            
                            <div className='list-profiles'>
                        
                            <div className='name-container'>
                                <img src={eachDetails.userProfileUrl} className='userProfileUrl' alt='userProfileUrl'/>
                                <p className='name'>{eachDetails.name}</p>
                            </div>
                            <p className='time'>{eachDetails.time}</p>
                        </div>
                        
                        <hr className="hr-line"/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        )
    }
}

export default LeftSide