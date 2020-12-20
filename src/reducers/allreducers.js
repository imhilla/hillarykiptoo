function getMode(state = { color: 'white', reverse: 'darkgray' }, action) {
  switch (action.type) {
    case 'GET_MODE':
      return {
        ...state,
        color: action.payload,
      };

    case 'SET_REVERSE':
      return {
        ...state,
        reverse: action.payload,
      };


    default:
      return state;
  }
}

export default getMode;
