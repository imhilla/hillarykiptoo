function getMode(state = { color: 'white' }, action) {
  switch (action.type) {
    case 'GET_MODE':
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
}

export default getMode;
