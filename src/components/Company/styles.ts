import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    div.img {
      width: 100%;
      img {
        border-radius: 50%;
        margin-right: 10px;
        width: 80%;
      }

      margin: 0;
      width: 60px;
    }

    div.company {
      h2 {
        font-size: 1rem;
      }
    }
  }
`;
