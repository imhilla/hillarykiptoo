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