import { css } from '@emotion/core';
import { gray_5 } from 'styles/colors';
import { resetFocus } from 'styles/customProperties';

export const textarea = css`
  ${resetFocus}
  padding: 8px 12px;
  min-height: 32px;
  box-sizing: border-box;
  background-color: #f2f3f5;
  border-radius: 16px;
  border: 1px solid #ccd0d5;
  line-height: 16px;
  resize: none;
  
  &::placeholder {
    font-size: 13px;
  }

  &:focus {
    border: 1px solid #ccd0d5;

    &::placeholder { 
      color: ${gray_5}
    }
  }
`;