import { css } from '@emotion/core';
import { blue_5, gray_5, gray_20 } from 'styles/colors';
import { resetFocus, resetLink } from 'styles/customProperties';

export const commentInput = css`
  display: flex;
  align-items: center;
`

export const textarea = css`
${resetFocus}
padding: 8px 12px;
min-height: 32px;
box-sizing: border-box;
border-radius: 16px;
border: 1px solid #ccd0d5;
background-color: #f2f3f5;
line-height: 16px;
resize: none;
font-family: Roboto, Sans-serif;
font-weight: normal;
font-size: 16px;
color: ${gray_20};

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

export const userName = css`
  ${resetLink}
  display: inline-block;
  color: ${blue_5};
  font-weight: 700;
  &:nth-of-type(2) {
    font-weight: 500;
    margin-left: 4px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
