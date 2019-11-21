const initialState = {
  num: 0
}

export default function counter (state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        num: state.num + 1
      }
     case 'MINUS':
       return {
         ...state,
         num: state.num - 1
       }
     default:
       return state
  }
}