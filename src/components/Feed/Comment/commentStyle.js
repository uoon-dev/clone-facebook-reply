import { css } from '@emotion/core';
import { blue_10 } from 'styles/colors'

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