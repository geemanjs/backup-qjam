import styled from '@emotion/styled';

// language=SCSS
export const ABlank = styled.a`
  & {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
  }
`;

// language=SCSS
export const ABlankLineHover = styled.a`
  & {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
  }

  &:hover {
    text-decoration: underline;
  }
`;
