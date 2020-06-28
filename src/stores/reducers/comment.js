import { handleActions } from 'redux-actions';

import * as actions from '../actions/comment';
import rejectDeepById from 'utils/rejectDeepById';
import updateDeep from 'utils/updateDeep';

const initialState = {
  list: [
    // {
    //   id: 1234,
    //   user: {
    //     id: 0,
    //     name: 'uoon',
    //     profileImageUrl: mumrikImage,
    //   },
    //   commentContent: 'test',      
    //   likeUsers: [
    //     {
    //       id: 0,
    //       name: 'uoon',
    //       profileImageUrl: mumrikImage,
    //     },
    //     {
    //       id: 3,
    //       name: 'shine',
    //       profileImageUrl: catImage,
    //     },        
    //   ],      
    //   children: [
    //     {          
    //       id: 2345,
    //       parentId: 1234,
    //       user: {
    //         id: 0,
    //         name: 'uoon',
    //         profileImageUrl: mumrikImage,
    //       },
    //       commentContent: 'test',
    //       likeUsers: [],
    //     },
    //     {          
    //       id: 3458,
    //       parentId: 1234,
    //       user: {
    //         id: 3,
    //         name: 'shine',
    //         profileImageUrl: catImage,
    //       },
    //       commentContent: 'test3',
    //       likeUsers: [],
    //     }
    //   ]
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
    // },
  ]
};

export default handleActions (
  {
    [actions.createCommentContent]: (state, action) => {
      const createdCommentData = {
        id: action.payload.id,
        parentId: action.payload.parentId,
        user: action.payload.user,
        commentContent: action.payload.commentContent,
        targetCommentInfo: action.payload.targetCommentInfo,
        likeUsers: [],
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
    [actions.updateCommentContent]: (state, action) => {
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
    [actions.deleteCommentContent]: (state, action) => { 
      const copiedList = [...state.list];
      copiedList.forEach((comment, i) => rejectDeepById(comment, copiedList, action.payload.id, i));

      return (
        {
          ...state,
          list: [...copiedList]
        }
      )
    },
    [actions.updateCommentLikeUser]: (state, action) => {
      const copiedList = [...state.list];
      const identity = {
        id: action.payload.id,
        key: 'likeUsers'
      }
      const value = action.payload.likeUsers;
      copiedList.forEach(comment => updateDeep(comment, identity, value));

      return (
        {
          ...state,
          list: [...copiedList]
        }
      )      
    },    
  },
  initialState
)