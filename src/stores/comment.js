import { createAction, handleActions } from 'redux-actions';

const CREATE_COMMENT_CONTENT = 'CREATE_COMMENT_CONTENT';
// const UPDATE_COMMENT_CONTENT = 'UPDATE_COMMENT_CONTENT';

export const createCommentContent = createAction(CREATE_COMMENT_CONTENT, data => data);
// export const updateCommentContent = createAction(UPDATE_COMMENT_CONTENT, text => text)

const initialState = {
  list: [
    { 
      id: 0,
      user: {
        id: 0,
        name: 'uoon',
        profileImageUrl: 'https://picsum.photos/seed/picsum/32/32',
      },
      commentContent: '',
      likeCount: ''
    },
  ]
};

export default handleActions (
  {
    [CREATE_COMMENT_CONTENT]: (state, action) => {
      console.log(action);
      return ({
      ...state,
      // list: state.list.concat({
      //   id: action.payload.id,
      //   user: action.payload.user,
      //   commentContent: action.payload.content,
      //   likeCount: action.payload.likeCount,
      // })
    })
  },    
    // [UPDATE_COMMENT_CONTENT]: (state, action) => ({
    //   ...state,
    //   comments: state.comments.concat({
    //     id: action.payload.id,
    //     name: action.payload.name,
    //     profileImage: action.payload.imageUrl,
    //     commentContent: action.payload.content,
    //     likeCount: action.payload.likeCount,
    //   })
    // }),
  },
  initialState
)