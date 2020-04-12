import styled from 'styled-components';
import bg from '../../assets/images/bg01.png';

export const Wrapper = styled.div`
  background: url(${bg}) center no-repeat;
  background-size: 60% auto;
  height: 100%;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  div.header {
    margin-bottom: 50px;
    div.titulo {
      h3 {
        font-size: 1.2rem;
        font-weight: 200;
      }
    }
  }

  div.section {
    margin: 20px 0;

    > form > div.company,
    > form > div.location,
    > form > div.phone {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-gap: 20px;
      margin: 20px 0;

      input {
        background: rgba(255, 255, 255, 0.8);
        padding: 10px;
        border-radius: 18px;
        border: none;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
      }

      > div.add {
        display: flex;
        align-items: center;

        > div.button {
          background-color: #281132;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

          > p {
            color: #fff;
            font-size: 1.6rem;
          }
        }

        > div.info {
          margin-left: 10px;
          p {
            color: #281132;
            font-size: 1rem;
          }
        }
      }

      > div.remove {
        display: flex;
        align-items: center;

        > div.button {
          background-color: #738BA4;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

          > p {
            color: #fff;
            font-size: 1.6rem;
          }
        }

        > div.info {
          margin-left: 10px;
          p {
            color: #281132;
            font-size: 1rem;
          }
        }
      }
    }

    > form > div.actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 50px 0;

      > button {
        padding: 10px 30px;
        border: none;
        border-radius: 18px;
        color: #fff;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
      }

      > button.cancel {
        background-color: #6c608b;
      }

      > button.submit {
        background-color: #738ba4;
      }
    }
  }
`;
