import { css } from '@emotion/core';
import { resetLayout, resetList, resetButton, resetFocus } from 'styles/customProperties';
import { blue_5, blue_20 } from 'styles/colors';

export const commentReactionMenus = css`
  ${resetLayout}
  display: flex;
  padding-top: 2px;
  margin-left: 12px;
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

export const isLikeChecked = css`
  color: ${blue_20};
  font-weight: 900;
`;