const app = (state={}, action) => {
  switch (action.type){
    
    case 'INITIALIZE_APP':
      return {
        ready: true
      }
          
    default:
      return state
  }
}

export default app