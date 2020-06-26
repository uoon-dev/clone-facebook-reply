import { css } from '@emotion/core'
import { resetLayout, resetList } from 'styles/customProperties';

export const commentList = css`
  ${resetList}
`

export const commentListGroup = css`
  ${resetLayout}

  .CommentList_Group {
    margin-top: -10px;
    padding: 8px 0 0 54px;
  }
`