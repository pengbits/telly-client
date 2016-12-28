import show from './show'

const queue = (state = [], action) => {
  switch (action.type){
    // case 'SET_SHOWS':
    //   return []
    // 
    // case 'GET_SHOWS':
    //   return action.shows
    //       
    case 'ADD_SHOW_TO_QUEUE': 
      var {id} = action.show;
      var isNew = state.indexOf(id) == -1
    
      return !isNew ? state : [ 
        ...state, id
      ]
    
    case 'REMOVE_SHOW_FROM_QUEUE':
      var {id} = action.show;
      var edit = []
      state.map(function(s){
        if(s !== id){
          edit.push(s)
        }
      })
    
      return edit
      
    
    default:
      return state
  }
}

export default queue