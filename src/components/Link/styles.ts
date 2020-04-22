import styled from 'styled-components';
import media from 'styled-media-query';
import { lighten } from 'polished';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  ${media.lessThan('small')`
      margin-top: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
    `}

  a, button {
    border-radius: 18px;
    padding: 10px;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 10px 0;
    background-color: #4a4668;
    color: #fff;

    &:hover {
      background-color: ${lighten(0.2, '#4a4668')};
      cursor: pointer;
    }

    ${media.lessThan('small')`
        margin-left: 1.2rem;
      `}

    li {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      svg {
        margin-right: 20px;
      }
    }

    span {
      ${media.lessThan('small')`
          display: none;
        `}
    }
  }

  button {
    outline: none;
    border: none;
  }
`;
