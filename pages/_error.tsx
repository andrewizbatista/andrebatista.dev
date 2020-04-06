import React from 'react';
import { styled } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';

const ErrorPage = ({ statusCode }: ErrorPageProps) => {
  return (
    <Wrapper>
      <Typography variant="h4">{`${statusCode}: Something went wrong :(`}</Typography>
    </Wrapper>
  );
};

ErrorPage.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export interface ErrorPageProps {
  statusCode: number;
}

export default ErrorPage;

const Wrapper = styled('div')({
  textAlign: 'center',
  height: '100vh',
});
