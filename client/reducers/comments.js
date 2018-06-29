// updates individual comment
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log('Adding a comment');
      // return new state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      console.log('Removing a comment');
      // return new state without the deleted comment
      return [
        // from beginning of array to the one we want to delete
        ...state.slice(0, action.idx),
        // after deleted comment to end of array
        ...state.slice(action.idx + 1)
      ];
    default:
      return state;
  }
  return state;
}

// manages entire comment state
function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      // key: array
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;

/*
When the user adds a new comment, we don't need to update the
entire comment state. We just need to work on one slice of the state.
So we'll create a sub-reducer that manages state for one specific comment.
That's 'reducer composition' (fundamental pattern of building Redux apps).
*/
