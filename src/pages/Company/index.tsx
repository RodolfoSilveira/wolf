import React from 'react';
import { FaSearch, FaEye, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';

const Company: React.FC = () => {
  return (
    <Wrapper>
      <div className="header">
        <div className="titulo">
          <h3>Empresas</h3>
        </div>
      </div>
      <div className="section">
        <div className="search-box">
          <FaSearch />
          <input type="search" name="search" placeholder="Buscar empresas..." />
        </div>
        <div className="button">
          <Link to="/companies/register">cadastrar empresa</Link>
        </div>
      </div>
      <div className="table-box">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Razão social</th>
              <th>CNPJ</th>
              <th>Proprietário</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td className="action-icons">
                <FaEye />
                <FaPencilAlt />
                <FaTrashAlt />
              </td>
            </tr>
            <tr>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td className="action-icons">
                <FaEye />
                <FaPencilAlt />
                <FaTrashAlt />
              </td>
            </tr>
            <tr>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td className="action-icons">
                <FaEye />
                <FaPencilAlt />
                <FaTrashAlt />
              </td>
            </tr>
            <tr>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td className="action-icons">
                <FaEye />
                <FaPencilAlt />
                <FaTrashAlt />
              </td>
            </tr>
            <tr>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td>teste</td>
              <td className="action-icons">
                <FaEye />
                <FaPencilAlt />
                <FaTrashAlt />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pagination-box">
        <div className="ant">
          <p>Anterior</p>
        </div>
        <div>
          <p>1</p>
        </div>
        <div>
          <p>2</p>
        </div>
        <div>
          <p>3</p>
        </div>
        <div>
          <p>4</p>
        </div>
        <div>
          <p>5</p>
        </div>
        <div className="prox">
          <p>Próximo</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Company;
