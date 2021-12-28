import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router';
import  {updUserInfo}  from '../redux/user/userAction'


function UpdateContainer (props) {

    const updateUser=useLocation()
    const {user} =updateUser.state
    let navigate = useNavigate();
    
    const [udata,setUpdate]=useState({
        name:user.name,
        email:user.email,
        phone:user.phone,
        id:user.id
    })
    
    const handleSubmit=() =>{
        navigate('/')        
    }
    const handleC=(e)=>{
        const name=e.target.name
        setUpdate
        (
            {
                ...udata,
                [name]:e.target.value
            }
        )
    }

    return(
        <div>

            <h1>Update User</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='adder'>Name  :</label>
                    <input type="text" className='adder' name="name" value={udata.name} onChange={handleC}/> 
                </div>

                <div>
                    <label className='adder'>E-mail :</label>
                    <input type="email" className='adder' name="email" value={udata.email} onChange={handleC}/>  
                </div>   

                <div>
                    <label className='adder'>Phone :</label>
                    <input type="phone" className='adder' name="phone" value={udata.phone} onChange={handleC}/> 
                </div>

                <div>
                    <div>
                        <button id="write" onClick={()=>props.updUserInfo(udata)}>Update User</button>
                    </div>
                </div> 
            </form>


        </div>
    )

}

const mapStateToProps=(state)=>
{
    return{
        user: state.userInfo.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updUserInfo: (udata)=>dispatch(updUserInfo(udata)),
    }   
}
export default connect(mapStateToProps,mapDispatchToProps)(UpdateContainer)
