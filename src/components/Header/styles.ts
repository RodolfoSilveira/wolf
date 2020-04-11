import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  grid-area: header;
  background: ${darken(0.08, '#B3B3CD')};
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
`;
