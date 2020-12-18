export const getMode = () => async dispatch => {
  try {
    localStorage.setItem('mode', 'black');
    dispatch({
      type: 'GET_MODE',
      payload: localStorage.mode,
    });
  } catch (e) {
    console.log(e);
  }
};