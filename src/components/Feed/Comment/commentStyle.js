import { css } from '@emotion/core';

export const commentItem = css`
  display: flex;
  align-items: end;
  padding: 6px 12px;
  position: relative;

  &:hover {
    .CommentSettingButton {
      visibility: visible;
    }
  }  
`;

export const commentContent = css`
  position: relative;
  width: 100%;

  textarea {
    width: 100%;
  }
`