import React, { memo } from 'react';
import { Paragraph } from 'components/fonts';
import { MainWithConfetti, WrapperSection } from 'components/containers';
import NavHeader from 'components/NavHeader';
import Footer from 'components/Footer';

const App = () => (
  <>
    <NavHeader />
    <MainWithConfetti>
      <WrapperSection>
        <Paragraph>hola</Paragraph>
      </WrapperSection>
    </MainWithConfetti>
    <Footer />
  </>
);

export default memo(App);
