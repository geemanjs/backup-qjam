import styled from "@emotion/styled";

//  language=SCSS
export const StandardGrid = styled.div`
  & {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    max-content: 320px;
    grid-gap: 20px;
    justify-content: center;
  }

  @media (min-width: 692px) {
    & {
      grid-template-columns: repeat(auto-fit, minmax(250px, 317px));
    }
  }
`;
