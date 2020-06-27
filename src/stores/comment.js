import { createAction, handleActions } from 'redux-actions';
import mumrik from "images/mumrik.png";
import mapValuesDeep from 'deepdash-es/mapValuesDeep';

const CREATE_COMMENT_CONTENT = 'CREATE_COMMENT_CONTENT';
const UPDATE_COMMENT_CONTENT = 'UPDATE_COMMENT_CONTENT';

export const createCommentContent = createAction(CREATE_COMMENT_CONTENT, data => data);
export const updateCommentContent = createAction(UPDATE_COMMENT_CONTENT, data => data);

const initialState = {
  commentTargetInfo: {},
  list: [
    {
      id: 1234,
      user: {
        id: 0,
        name: 'uoon',
        profileImageUrl: mumrik,
      },
      commentContent: 'test',
      likeCount: '',
      // children: [
      // ],
      children: [
        {          
          id: 2345,
          parentId: 1234,
          user: {
            id: 0,
            name: 'uoon',
            profileImageUrl: mumrik,
          },
          commentContent: 'test',
          likeCount: '',
        },
        {          
          id: 3458,
          parentId: 1234,
          user: {
            id: 3,
            name: 'hiden',
            profileImageUrl: mumrik,
          },
          commentContent: 'test3',
          likeCount: '',
        }
      ]
      //   {
      //     id: 3457,
      //     parentId: 1234,
      //     targetCommentInfo: {
      //       id: 3457,
      //       user: {
      //         id: 3,
      //         name: 'hiden',
      //         profileImageUrl: mumrik,
      //       }
      //     },
      //     user: {
      //       id: 0,
      //       name: 'uoon',
      //       profileImageUrl: mumrik,
      //     },
      //     commentContent: 'test3',
      //     likeCount: '',
      //   },        
      // ] 
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
        targetCommentInfo: action.payload.targetCommentInfo,
        children: []
      }
      return ({
      ...state,
      list: action.payload.parentId ? 
        state.list.map(comment => {
          if (comment.id === action.payload.parentId) {
            comment.children.push(createdCommentData);
          }
          return comment;
        }) :
        state.list.concat(createdCommentData)
     })
    },
    [UPDATE_COMMENT_CONTENT]: (state, action) => (
      {
        ...state,
        list: mapValuesDeep(
          state.list,
          (val, key, parentValue) => 
            (key === 'commentContent' && parentValue.id === action.payload.id) ? 
              action.payload.commentContent : val,
          { leavesOnly: true }
        )
      }
    ),
  },
  initialState
)