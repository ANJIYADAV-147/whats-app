import './index.css'

const contactProfiles=(props)=>{
    const {contactDetails}=props
    const {id,name,userProfileUrl,time}=contactDetails
    return(
        <li className='list-profiles'>
            <img src={userProfileUrl} className='userProfileUrl' alt='userProfileUrl'/>
            <div className='name-container'>
                <h1 className='name'>{name}</h1>
                <p className='time'>{time}</p>
                <hr className='line'/>
            </div>
        </li>
    )
}
export default contactProfiles