import React, { memo } from 'react';
import NavHeader from 'components/NavHeader';
import { Wrapper } from 'components/containers';
import { Paragraph } from 'components/fonts';

const App = () => (
  <>
    <NavHeader />
    <Wrapper>
      <Paragraph>g</Paragraph>
    </Wrapper>
  </>
);

export default memo(App);
