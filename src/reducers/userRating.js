const userRating = (state = 0, action) => {
  switch (action.type) {
    
    case 'SET_USER_RATING':
      return action.userRating
      
    case 'GET_USER_RATING':
    default:
      return state
  }
}

export default userRating