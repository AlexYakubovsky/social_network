import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    postData: [
        {id: 1, post: 'Hi', like: 1},
        {id: 2, post: 'It is my second post', like: 7},
        {id: 3, post: 'How are you?', like: 3},
        {id: 4, post: 'What do you think about my last post?:)', like: 5}
    ]
};

it('number of posts in postData should be increased', () => {
    // test data
    let action = addPost('test post');

    // action
    let newState = profileReducer(state, action);

    // expect
    expect(newState.postData.length).toBe(5);
});

it('post in postData should be 0 likes', () => {
    // test data
    let action = addPost('test post');

    // action
    let newState = profileReducer(state, action);

    // expect
    expect(newState.postData[4].like).toBe(0);
});

it('number of posts in postData should be decreased', () => {
    // test data
    let action = deletePost(3);

    // action
    let newState = profileReducer(state, action);

    // expect
    expect(newState.postData.length).toBe(3);
});