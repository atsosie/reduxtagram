// The first time this function runs, state will be equal to nothing,
// so we're setting initial state with an empty array.
function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing likes');

      const idx = action.index;

      return [
        ...state.slice(0, idx), // everything up to the one we're updating
        { ...state[idx], likes: state[idx].likes + 1 },
        ...state.slice(idx + 1) // everything after the one we're updating
      ];
    default:
      return state;
  }
}

export default posts;
