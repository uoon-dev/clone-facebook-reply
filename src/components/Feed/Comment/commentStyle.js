import { css } from '@emotion/core';
import { blue_10 } from 'styles/colors'

export const commentItem = css`
  display: flex;
  align-items: end;
  padding: 6px 12px;
  position: relative;

  // &.CreatedComment {
  //   &::before {
  //     background-color: ${blue_10};
  //     position: absolute;
  //     bottom: 0;
  //     left: 0;
  //     top: 0;
  //     content: '';
  //     width: 2px;    
  //   }
  // }

  &:hover {
    .CommentSettingButton {
      visibility: visible;
    }
  }  
`;

export const commentContent = css`
  position: relative;
`