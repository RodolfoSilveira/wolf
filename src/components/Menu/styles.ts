import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  grid-area: menu;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: #B3B3CD;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  ${media.lessThan('small')`
    justify-content: flex-start;
  `}
`;
