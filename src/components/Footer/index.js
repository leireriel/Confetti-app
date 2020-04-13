import React, { memo } from 'react';
import { A, Small } from 'components/fonts';
import { FooterWrapper, List } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <List>
        <li>
          <Small>
            <A href='#f'>
              Sobre nosotros
            </A>
          </Small>
        </li>
      </List>
    </FooterWrapper>
  );
};

export default memo(Footer);
