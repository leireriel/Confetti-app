import React, { memo } from 'react';
import { Paragraph } from 'components/fonts';
import { MainWithConfetti, WrapperHome, Section } from 'components/containers';
import NavHeader from 'components/NavHeader';
import Footer from 'components/Footer';
import Brand from 'components/Brand';

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
        </Section>
      </WrapperHome>
    </MainWithConfetti>
    <Footer />
  </>
);

export default memo(App);
