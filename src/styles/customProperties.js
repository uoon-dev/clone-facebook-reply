import { css } from '@emotion/core';

export const resetLayout = css`
  margin: 0;
  padding: 0;
`;

export const resetAppearance = css`
  border: 0;
  appearance: none;
  outline: none;
`;

export const resetList = css`
  ${resetLayout}
  ${resetAppearance}
  list-style: none;
`;

export const resetButton = css`
  ${resetLayout}
  ${resetAppearance}
  background: none;
  line-height: 0;
  box-shadow: none;
  cursor: pointer;
`;

export const resetHover = css`
  &:hover {
    ${resetAppearance}
  }
`;

export const resetFocus = css`
  &:focus {
    ${resetAppearance}
  }
`;

export const resetLink = css`
  text-decoration: none;
`;