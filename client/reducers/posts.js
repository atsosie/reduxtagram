// The first time this function runs, state will be equal to nothing,
// so we're setting initial state with an empty array.
function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
