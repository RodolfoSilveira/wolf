import styled from 'styled-components';
import media from 'styled-media-query';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 60% 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  grid-template-areas: 'wallpaper form';

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
    grid-template-areas: 'form';
  `}

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    grid-template-areas: 'form';
  `}
`;

export const Wallpaper = styled.div`
  grid-area: 'wallpaper';
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a096b0;

  ${media.lessThan('small')`
    display: none;
  `}

  ${media.lessThan('medium')`
    display: none;
  `}

  div {
    width: 600px;
    .carousel .slide {
      background: none;
    }
  }
`;

export const Content = styled.div`
  grid-area: 'form';
  display: flex;
  justify-content: center;
  border-left: 1px solid rgba(0, 0, 0, 0.2);

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    align-items: center;
  `}

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: ${darken(0.06, '#4a4668')};
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #281132;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#281132')};
      }
    }
    a {
      color: #4a4668;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
