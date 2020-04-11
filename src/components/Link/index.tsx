import React from 'react';
import {
  FaHome,
  FaTasks,
  FaUsers,
  FaUserShield,
  FaSignOutAlt,
  FaRegBuilding,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {List} from './styles';

const LinkBox: React.FC = () => {
  return (
    <List>
      <Link to="/dashboard">
        <li>
          <FaHome />

          <span>Home</span>
        </li>
      </Link>
      <Link to="/dashboard">
        <li>
          <FaTasks />

          <span>Tarefas</span>
        </li>
      </Link>
      <Link to="/dashboard">
        <li>
          <FaUsers />

          <span>Clientes</span>
        </li>
      </Link>
      <Link to="/dashboard">
        <li>
          <FaUserShield />

          <span>Funcionários</span>
        </li>
      </Link>
      <Link to="/companies">
        <li>
          <FaRegBuilding />

          <span>Empresas</span>
        </li>
      </Link>
      <Link to="/dashboard">
        <li>
          <FaSignOutAlt />

          <span>Sair</span>
        </li>
      </Link>
    </List>
  );
};

export default LinkBox;
