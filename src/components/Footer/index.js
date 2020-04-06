import React, { memo } from 'react';
import { Link, Micro } from 'components/fonts';
import { FooterWrapper, List } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <List>
        <li>
          <Link href='#f'>
            <Micro>Sobre nosotros</Micro>
          </Link>
        </li>
      </List>
    </FooterWrapper>
  );
};

export default memo(Footer);
