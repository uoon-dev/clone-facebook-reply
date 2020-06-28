import { css } from '@emotion/core';
import { gray_5 } from 'styles/colors';
import { resetButton } from 'styles/customProperties';

export const layout = css`
  margin: 40px auto;
  max-width: 500px;
`;

export const changeUserButton = css`
  ${resetButton}
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  padding: 10px 15px;
  width: 138px;
  border: 1px solid ${gray_5};
  border-radius: 2px;
`
