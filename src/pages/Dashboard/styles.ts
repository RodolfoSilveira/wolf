import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  div.header {
    display: flex;
    justify-content: space-between;

    div.titulo {
      h3 {
        font-size: 1.2rem;
        font-weight: 200;
      }
    }

    div.box-time {
      div.time {
        background-color: rgba(179, 179, 205, 0.5);
        padding: 10px 30px;
        border-radius: 18px;

        &:hover {
          cursor: pointer;
          background: ${darken(0.08, 'rgba(179, 179, 205, 0.5)')};
        }
      }
    }
  }

  div.info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    margin: 20px 0;

    div.box {
      background-color: rgba(179, 179, 205, 0.5);
      border-radius: 18px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 138px;

      div.icone {
        svg {
          width: 60px;
          height: 60px;
        }
      }

      div.dados {
        p {
          font-weight: bold;
          font-size: 2.2rem;
          padding-bottom: 10px;
        }

        h3 {
          font-weight: 200;
          text-transform: uppercase;
          font-size: 1rem;
        }
      }
    }
  }

  div.grafico {
    div.titulo {
      h3 {
        font-size: 1.2rem;
        font-weight: 200;
        margin-bottom: 20px;
      }
    }

    div.line {
      background-color: rgba(179, 179, 205, 0.5);
      padding: 20px;
      border-radius: 18px;
    }
  }
`;
