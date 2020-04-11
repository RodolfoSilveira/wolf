import React from 'react';
import { Wrapper } from './styles';
import Avatar from '../Avatar';
import Company from '../Company';
import Link from '../Link';

const Menu: React.FC = () => {
  return (
    <Wrapper>
      <Company />
      <Avatar />
      <Link />
    </Wrapper>
  );
};

export default Menu;
