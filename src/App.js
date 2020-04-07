import React, { memo } from 'react';
import { Paragraph } from 'components/fonts';
import { MainWithConfetti, WrapperHome, Section } from 'components/containers';
import NavHeader from 'components/NavHeader';
import Footer from 'components/Footer';
import Confetti from 'assets/confetti-color.png';

const App = () => (
  <>
    <NavHeader />
    <MainWithConfetti>
      <WrapperHome>
        <Section>
          <Paragraph>
            Crea tu cuenta en <img src={Confetti} alt='Confetti' style={{width: '4em'}}></img> y no vuelvas a olvidarte de un cumpleaños"! 😉
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
