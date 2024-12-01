import React from 'react';
import ReactAntUpload2weibo from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default () => {
  return (
    <Container>
      <ReactAntUpload2weibo
        onChange={(e) => {
          console.log('upload changed value: ', e);
        }}
      />
    </Container>
  );
};
