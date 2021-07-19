import { Box, Flex, FlexProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Footer } from "./Footer";
import { Header } from "./Header";

//  language=SCSS
const StickyFooterPageWrap = styled.div`
  & {
    min-height: 100%;
    width: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto -216px;
  }

  &:after {
    content: "";
    display: block;
  }

  .push-footer {
    height: 216px;
  }
`;

export const StandardLayout = ({
  children,
  withDefaultHeader = true,
  ...other
}: { withDefaultHeader?: boolean } & FlexProps) => {
  return (
    <Box width="100%" height="100%" direction="column" {...other}>
      <StickyFooterPageWrap>
        {withDefaultHeader ? <Header /> : null}
        {children}
        <div className="push-footer"></div>
      </StickyFooterPageWrap>
      <Box width="100%" bg="neutral.900">
        <Footer />
      </Box>
    </Box>
  );
};
