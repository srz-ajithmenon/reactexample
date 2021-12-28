import React, {useEffect} from "react";
import { connect } from "react-redux";
import getUserInfo from "../redux/user/userAction";
import { delUserInfo } from "../redux/user/userAction"
import {Link} from 'react-router-dom'
import '../designs/display.css'


function DisplayContainer (props) {

    const {id, name,phone,email } = props.user;
    const leng = props.user.length

    console.log("just.....",leng)

    useEffect(() => {

        props.getUserInfo() 
        //Runs only on the first render
      },[]);
 
  
    return(
        <div>
            
            <h1>User Details</h1>
            {/* <button onClick={props.getUserInfo}>click here</button> */}

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                {props.user.map(function(item,idx){
                    return(
                        <tbody>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            
                            <td>
                                <button id="read">
                                    <Link to='/update'
                                        state={{user:item}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </Link>
                                </button>

                                <button  onClick={props.delUserInfo.bind(this, item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </td>
                        </tbody>
                    )
                })}

            </table>
      
        </div>
    )
}

const mapStateToProps = state => {
    return{
        user: state.userInfo.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: () => dispatch(getUserInfo()),

        delUserInfo : (userid) => dispatch(delUserInfo(userid))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(DisplayContainer)