import { Container } from '@chakra-ui/react';
import * as React from 'react';
import {StandardLayout} from "../components/Layouts/Standard";

const ErrorPage = () => (
  <StandardLayout>
    <Container py={4} bg="white">
      Woops - Looks like we hit a problem.
    </Container>
  </StandardLayout>
);

export default ErrorPage;
