const getUserInfo = () => {
  return {
    type: 'GET_USER_INFO',
  }
}

export default getUserInfo

export const postUserInfo = (user) => {
  return{
      type: 'POST_USER_INFO',
      payload: user,
  }
}

export const delUserInfo = (userid) => {
  return{
      type: 'DEL_USER_INFO',
      payload: userid,
  }
}

export const updUserInfo = (user) => {
  return{
      type: 'UPD_USER_INFO',
      payload: user,
  }
}