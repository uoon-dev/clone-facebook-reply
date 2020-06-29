import { css } from '@emotion/core';
import { resetLayout, resetList, resetButton, resetFocus } from 'styles/customProperties';
import { blue_5, blue_20 } from 'styles/colors';
import { TABLET_MAX_WIDTH } from 'constants/screenSize';

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
  &:not(:first-child)::before {
    content:"·";
    display: inline-block;
    width: 10px;
    line-height: 21px;
    text-align: center;
  }
`;

export const commentReactionMenuButton = css`
  ${resetButton}
  ${resetFocus}
  height: 100%;
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

export const commentSettingInMobile = css`
  display: none;
  @media screen and (max-width: ${TABLET_MAX_WIDTH}px) {
    display: block;
    & .CommentSettingButton {
      visibility: visible;      
    }
  }
`;