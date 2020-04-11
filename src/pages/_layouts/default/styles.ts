import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  height: 100%;
  margin: 20px 20px 0 20px;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'menu main';

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
    grid-template-rows: 10% 1fr;
    grid-template-areas: 'menu' 'main';
  `}
`;
