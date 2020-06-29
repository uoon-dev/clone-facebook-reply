import { css } from '@emotion/core';
import { TABLET_MAX_WIDTH } from 'constants/screenSize';

export const commentItem = css`
  display: flex;
  align-items: end;
  padding: 6px 12px;
  position: relative;

  &:hover {
    @media screen and (min-width: ${TABLET_MAX_WIDTH + 1}px) {
      .CommentSettingButton {
        visibility: visible;
      }
    }
  }
`;

export const commentContent = css`
  position: relative;
  width: 100%;

  textarea {
    width: 100%;
  }
`;

export const commentSettingInPc = css`
  visibility: hidden;
`;