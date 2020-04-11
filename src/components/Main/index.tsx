import React from 'react';
import { Wrapper } from './styles';

interface AuxProps {
  children: React.ReactNode;
}

const Main: React.FC<AuxProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Main;
