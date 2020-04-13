import React, { memo } from 'react';
import { P, Small } from 'components/fonts';
import { MainWithConfetti, WrapperHome, Section } from 'components/containers';
import NavHeader from 'components/NavHeader';
import Footer from 'components/Footer';
import Brand from 'components/Brand';

import Button from 'components/Button';

const App = () => (
  <>
    <NavHeader />
    <MainWithConfetti>
      <WrapperHome>
        <Section>
          <P>
            Crea tu cuenta en <Brand /> y no vuelvas a olvidarte de un cumpleaños"! 😉
          </P>
        </Section>
        <Section lastOne={true}>
          <P>
            Hola, esto es otra sección
          </P>
          <Button margin='1em 0'><Small>normal</Small></Button>
          <Button type='disabled' margin='1em 0'><Small>disabled</Small></Button>
          <Button type='warning' margin='1em 0'>warning</Button>
        </Section>
      </WrapperHome>
    </MainWithConfetti>
    <Footer />
  </>
);

export default memo(App);
