import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
let state =
{
  postData: [
    { id: 0, message: 'Wow', likesCount: '0' },
    { id: 1, message: "Hi,how are you?", likesCount: '15' },
    { id: 2, message: "It's my first post", likesCount: '20' }
  ]
}

it('length of posts should be incremented', () => {
  //1.test data
  let action = addPostActionCreator('new post');
  state
  //2 action
  let newState = profileReducer(state, action);
  //3 expectation
  expect(newState.postData.length).toBe(4)

});

it('message of post', () => {
  //1.test data
  let action = addPostActionCreator('new post');
  state
  //2 action
  let newState = profileReducer(state, action);
  //3 expectation
  expect(newState.postData[3].message).toBe('new post')
});

it('after deleting length of messages should be decrembent', () => {
  //1.test data
  let action = deletePost(1);
  state
  //2 action
  let newState = profileReducer(state, action);
  //3 expectation
  expect(newState.postData.length).toBe(2)
});

it('after deleting length of messages shouldn`t be id is uncorrect decrembent', () => {
  //1.test data
  let action = deletePost(1000);
  state
  //2 action
  let newState = profileReducer(state, action);
  //3 expectation
  expect(newState.postData.length).toBe(4)
});