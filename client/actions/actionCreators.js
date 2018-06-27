/*
ACTION CREATORS EXPLANATION:

These are functions you export/import between modules, and they generate action objects.
Use these instead of creating inline action objects (dispatch( { key: value } )).
Calling an action creator does not dispatch the action itself.
*/

// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}
/*
You don't want to send all the post info along with increment.
You just want to send the minimum info needed. In this case, all we need is
the identifier for which post needs its number of likes to be incremented.
*/

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  };
}
