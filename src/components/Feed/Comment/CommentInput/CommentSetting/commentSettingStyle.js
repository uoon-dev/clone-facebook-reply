import { css } from '@emotion/core';
import { gray_5, gray_10, black_100 } from 'styles/colors';
import { resetButton } from 'styles/customProperties';

export const commentSettingButton = css`
  ${resetButton}
  visibility: hidden;
  margin-left: 6px;
  color: ${gray_5};

  &:hover {
    color: ${black_100};    
  }

  &.IsCommentSettingClicked {
    visibility: visible;        
  }
`;

export const commentSettingClickTooltip = css`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 12px;  
  min-height: 56px;
  border-radius: 3px;
  opacity: 1;
  box-shadow: 0 3px 8px rgba(0, 0, 0, .3);
  box-sizing: border-box;
  justify-content: space-around;
`;

export const updateCommentButton = css`
  ${resetButton}
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const deleteCommentButton = css`
  ${resetButton}
  display: flex;
  align-items: center;  
`;

export const buttonIcon = css`
  margin-right: 4px;
  font-size: 19px;
  color: ${gray_10};
`