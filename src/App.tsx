import { SplitterIcon } from 'components/icons';
import { Main } from 'pages/Main';
import React from 'react';
import { ContainerDiv, ContainerTitle, WrapperDiv } from 'styles';

function App() {
  return (
    <ContainerDiv>
      <WrapperDiv>
        <ContainerTitle>
          <SplitterIcon />
        </ContainerTitle>

        <Main />
      </WrapperDiv>
    </ContainerDiv>
  );
}

export default App;
