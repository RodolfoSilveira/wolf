import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Wrapper, Content, Wallpaper } from './styles';
import slide01 from '../../../assets/images/slide01.svg';
import slide02 from '../../../assets/images/slide02.svg';
import slide03 from '../../../assets/images/slide03.svg';

interface AuxProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuxProps> = ({ children }) => {
  return (
    <Wrapper>
      <Wallpaper>
        <div>
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
          >
            <div>
              <img src={slide01} alt="slide01" />
            </div>
            <div>
              <img src={slide02} alt="slide02" />
            </div>
            <div>
              <img src={slide03} alt="slide03" />
            </div>
          </Carousel>
        </div>
      </Wallpaper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default AuthLayout;
