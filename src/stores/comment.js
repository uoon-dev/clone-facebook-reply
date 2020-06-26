import { createAction, handleActions } from 'redux-actions';
import mumrik from "images/mumrik.png";
const CREATE_COMMENT_CONTENT = 'CREATE_COMMENT_CONTENT';
// const UPDATE_COMMENT_CONTENT = 'UPDATE_COMMENT_CONTENT';

export const createCommentContent = createAction(CREATE_COMMENT_CONTENT, data => data);
// export const updateCommentContent = createAction(UPDATE_COMMENT_CONTENT, text => text)

const initialState = {
  list: [
    { 
      id: 1,
      user: {
        id: 0,
        name: 'uoon',
        profileImageUrl: mumrik,
      },
      commentContent: '',
      likeCount: '',
      children: [
        {          
          id: 1,
          parentId: 1,
          user: {
            id: 0,
            name: 'uoon',
            profileImageUrl: mumrik,
          },
          commentContent: '',
          likeCount: '',
          children: []
        },
        // {
        //   id: 2,
        //   user: {
        //     id: 0,
        //     name: 'uoon',
        //     profileImageUrl: 'https://picsum.photos/seed/picsum/32/32',
        //   },
        //   commentContent: '',
        //   likeCount: '',
        //   children: []
        // }        
      ] 
    },
  ]
};

export default handleActions (
  {
    [CREATE_COMMENT_CONTENT]: (state, action) => {
      const createdCommentData = {
        id: action.payload.id,
        parentId: action.payload.parentId,
        user: action.payload.user,
        commentContent: action.payload.commentContent,
        likeCount: action.payload.likeCount,
        children: []
      }
      return ({
      ...state,
      list: action.payload.parentId ? 
        state.list.map(comment => {
          if (comment.id === action.payload.parentId) {
            comment.children.push(createdCommentData)
          }
          return comment;
        }) :
        state.list.concat(createdCommentData)
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