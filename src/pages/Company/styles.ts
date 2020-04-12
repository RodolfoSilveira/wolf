import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    > div.search-box {
      display: flex;
      align-items: center;
      height: auto;
      width: 50%;
      padding: 10px 20px;
      border-radius: 18px;
      background-color: #fff;
      border: 1px solid #281132;

      > svg {
        width: 20px;
        height: 20px;
        color: #281132;
      }

      > input {
        background-color: #fff;
        border: none;
        padding: 5px 10px;
        width: 100%;
      }
    }

    > div.button {
      > a {
        border: none;
        outline: none;
        background-color: #738BA4;
        padding: 15px 20px;
        border-radius: 18px;
        color: #fff;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

        &:hover {
          background-color: ${darken(0.2, '#738BA4')};
        }
      }
    }
  }

  div.table-box {
    width: 100%;
    margin: 20px 0;

    .table {
      width: 100%;
      max-width: 100%;
      margin-bottom: 2rem;
      border: 1px solid #281132;
      border-radius: 18px;
      background-color: #fff;

      > thead > tr,
      tbody > tr {
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      > thead > tr > th,
      > tbody > tr > th,
      > thead > tr > td,
      > tbody > tr > td {
        text-align: left;
        padding: 1.2rem;
        vertical-align: top;
        border-top: 0;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      > thead > tr > th,
      > thead > tr > td {
        text-align: center;
        text-transform: uppercase;
      }

      > thead > tr > th {
        font-weight: 400;
        color: #757575;
        vertical-align: bottom;
        border-right: 1px solid #281132;
      }

      > thead > tr > th:last-child {
        border-right: none;
      }

      > tbody > tr > td {
        border-top: 1px solid #281132;
        border-right: 1px solid #281132;
      }

      > tbody > tr > td:last-child {
        border-right: none;
      }

      .action-icons {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      > tbody > tr > td.action-icons > svg {
        width: 20px;
        height: 20px;

        &:hover {
          cursor: pointer;
          color: #738BA4;
        }
      }
    }
  }

  div.pagination-box {
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      padding: 20px;
      background-color: #738BA4;
      border-right: 1px solid #281132;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

      &:hover {
        cursor: pointer;
        background-color: #281132;
      }

      p {
        color: #fff;
      }
    }

    > div:last-child {
      border-right: none;
    }

    div.ant {
      border-top-left-radius: 18px;
      border-bottom-left-radius: 18px;
    }

    div.prox {
      border-top-right-radius: 18px;
      border-bottom-right-radius: 18px;
    }
  }
`;
