import { css } from '@emotion/core';
import { resetLayout, resetList, resetButton, resetFocus } from 'styles/customProperties';
import { blue_5 } from 'styles/colors';

export const commentReactionMenus = css`
  ${resetLayout}
  display: flex;
`;

export const commentReactionMenu = css`
  ${resetList}
  position: relative;  
  font-size: 12px;
  &:not(:last-child)::after {
    content:"·";
    display: inline-block;
    width: 10px;
    text-align: center;
  }
`;

export const commentReactionMenuButton = css`
  ${resetButton}
  ${resetFocus}
  color: ${blue_5};
  font-size: 12px;

  &:focus {
    outline: none;
  }
  
  &:hover {
    text-decoration: underline;
  }
`