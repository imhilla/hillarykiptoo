export const getMode = (color) => async dispatch => {
  try {
    dispatch({
      type: 'GET_MODE',
      payload: color,
    });
  } catch (e) {
    console.log(e);
  }
};

export const setReverse = (reverse) => async dispatch => {
  try {
    dispatch({
      type: 'SET_REVERSE',
      payload: reverse,
    });
  } catch (e) {
    console.log(e);
  }
};