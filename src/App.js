import React, { memo } from 'react';
import { Paragraph } from 'components/fonts';
import NavHeader from 'components/NavHeader';
import { MainWithConfetti } from 'components/containers';
import Footer from 'components/Footer';

const App = () => (
  <>
    <NavHeader />
    <MainWithConfetti>
      <Paragraph>dsfjskl</Paragraph>
    </MainWithConfetti>
    <Footer />
  </>
);

export default memo(App);
