const initialState = {
  color: 'white',
}

function getMode(state = {initialState}, action) {
  switch (action.type) {
    case 'GET_DARK':
      return {
        ...state,
        mode: action.payload,
      };
      
    default:
      return state;
  }
}

export default getMode;
