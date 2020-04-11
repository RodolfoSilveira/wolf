import React from 'react';
import { Wrapper } from './styles';

const Avatar: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <img src="https://api.adorable.io/avatars/100/abott@adorable.png" alt="avatar" />
        </div>
        <div>
          <h2>Rodolfo</h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default Avatar;
