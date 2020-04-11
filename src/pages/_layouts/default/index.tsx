import React from 'react';
import { Wrapper } from './styles';
import Main from '../../../components/Main';
import Menu from '../../../components/Menu';

interface AuxProps {
  children: React.ReactNode;
}
const DefaultLayout: React.FC<AuxProps> = ({ children }) => {
  return (
    <Wrapper>
      <Menu />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default DefaultLayout;
