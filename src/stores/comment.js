import { createAction, handleActions } from 'redux-actions';
import mumrikImage from "images/mumrik.png";
import catImage from "images/cat.png";
import rejectDeepById from 'utils/rejectDeepById';
import updateDeep from 'utils/updateDeep';

const CREATE_COMMENT_CONTENT = 'CREATE_COMMENT_CONTENT';
const UPDATE_COMMENT_CONTENT = 'UPDATE_COMMENT_CONTENT';
const DELETE_COMMENT_CONTENT = 'DELETE_COMMENT_CONTENT';

export const createCommentContent = createAction(CREATE_COMMENT_CONTENT, data => data);
export const updateCommentContent = createAction(UPDATE_COMMENT_CONTENT, data => data);
export const deleteCommentContent = createAction(DELETE_COMMENT_CONTENT, data => data);

const initialState = {
  list: [
    {
      id: 1234,
      user: {
        id: 0,
        name: 'uoon',
        profileImageUrl: mumrikImage,
      },
      commentContent: 'test',
      likeCount: '',
      children: [
        {          
          id: 2345,
          parentId: 1234,
          user: {
            id: 0,
            name: 'uoon',
            profileImageUrl: mumrikImage,
          },
          commentContent: 'test',
          likeCount: '',
        },
        {          
          id: 3458,
          parentId: 1234,
          user: {
            id: 3,
            name: 'shine',
            profileImageUrl: catImage,
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
    [UPDATE_COMMENT_CONTENT]: (state, action) => {
      const copiedList = [...state.list];
      const identity = {
        id: action.payload.id,
        key: 'commentContent'
      }
      const value = action.payload.commentContent;
      copiedList.forEach(comment => updateDeep(comment, identity, value));

      return (
        {
          ...state,
          list: [...copiedList]
        }
      )      
    },
    [DELETE_COMMENT_CONTENT]: (state, action) => { 
      const copiedList = [...state.list];
      copiedList.forEach((comment, i) => rejectDeepById(comment, copiedList, action.payload.id, i));
      return (
        {
          ...state,
          list: [...copiedList]
        }
      )
    }
  },
  initialState
)