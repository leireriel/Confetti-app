import React, { memo } from 'react';
import { A, Small } from 'components/fonts';
import { FooterWrapper, List } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <List>
        <li>
          <A href='#f'>
            <Small>Sobre nosotros</Small>
          </A>
        </li>
      </List>
    </FooterWrapper>
  );
};

export default memo(Footer);
