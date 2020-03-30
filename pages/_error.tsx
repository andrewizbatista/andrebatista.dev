import React from 'react';
import { styled } from '@material-ui/styles';

const ErrorPage = ({}: IErrorPage) => {
  return (
    <Wrapper>
      <h1>404: Page not found</h1>
    </Wrapper>
  );
};

export interface IErrorPage {}

export default ErrorPage;

const Wrapper = styled('div')({
  textAlign: 'center',
  height: '100vh',
});
