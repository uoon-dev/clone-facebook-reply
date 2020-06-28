import { createAction } from 'redux-actions';

export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const CREATE_COMMENT_CONTENT = 'CREATE_COMMENT_CONTENT';
export const UPDATE_COMMENT_CONTENT = 'UPDATE_COMMENT_CONTENT';
export const DELETE_COMMENT_CONTENT = 'DELETE_COMMENT_CONTENT';
export const UPDATE_COMMENT_LIKE_USER = 'UPDATE_COMMENT_LIKE_USER';
export const LINK_COMMENT_INPUTS = 'LINK_COMMENT_INPUTS';

export const loadComments = createAction(LOAD_COMMENTS, data => data);
export const createCommentContent = createAction(CREATE_COMMENT_CONTENT, data => data);
export const updateCommentContent = createAction(UPDATE_COMMENT_CONTENT, data => data);
export const deleteCommentContent = createAction(DELETE_COMMENT_CONTENT, data => data);
export const updateCommentLikeUser = createAction(UPDATE_COMMENT_LIKE_USER, data => data);
export const linkCommentInputs = createAction(LINK_COMMENT_INPUTS, data => data);