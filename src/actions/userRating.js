export const getUserRating = (id) => {
  return {
    type: 'GET_USER_RATING'
  }
}

export const setUserRating = (id, rating) => {
  return {
    type: 'GET_USER_RATING',
    userRating
  }
}