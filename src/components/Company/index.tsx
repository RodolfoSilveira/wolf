import React from 'react';
import {Wrapper} from './styles';
import logo from '../../assets/images/logo.png';

const Company: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <div className="img">
          <img src={logo} alt="avatar" />
        </div>
        <div className="company">
          <h2>empresa 01</h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default Company;
