import { css } from '@emotion/core';

export const resetLayout = css`
  margin: 0;
  padding: 0;
`;

export const resetAppearance = css`
  border: 0;
  appearance: none;
`;

export const resetList = css`
  ${resetLayout}
  ${resetAppearance}
  list-style: none;
`;