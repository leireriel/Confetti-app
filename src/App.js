import React, { memo } from 'react';
import { Paragraph } from 'components/fonts';
import { MainWithConfetti, WrapperHome, Section } from 'components/containers';
import NavHeader from 'components/NavHeader';
import Footer from 'components/Footer';
import Brand from 'components/Brand';

import Dropdown from 'components/Dropdown';
import Button from 'components/Button';

const App = () => (
  <>
    <NavHeader />
    <MainWithConfetti>
      <WrapperHome>
        <Section>
          <Paragraph>
            Crea tu cuenta en <Brand /> y no vuelvas a olvidarte de un cumpleaños"! 😉
          </Paragraph>
        </Section>
        <Section lastOne={true}>
          <Paragraph>
            Hola, esto es otra sección
          </Paragraph>
          <Button margin='1em 0'>normal</Button>
          <Button type='disabled' margin='1em 0'>disabled</Button>
          <Button type='warning' margin='1em 0'>warning</Button>
        </Section>
      </WrapperHome>
    </MainWithConfetti>
    <Footer />
  </>
);

export default memo(App);
