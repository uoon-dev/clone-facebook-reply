import { css } from '@emotion/core';
import { white_0, gray_20 } from 'styles/colors';

export const likeStatus = css`
  position: absolute;
  bottom: 4px;
  right: -19px;
  display: flex;
  padding: 2px;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2);
  background-color: ${white_0};
  color: ${gray_20};
  font-size: 11px;
`;

export const likeStatusIcon = css`
  margin-right: 3px;
  width: 16px;
  height: 16px;
`;