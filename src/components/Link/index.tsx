import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { Creators  as authCreators } from '../../store/ducks/auth';

const LinkBox: React.FC = () => {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(authCreators.signOut());
  }

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
      <button onClick={handleSignOut}>
        <li>
          <FaSignOutAlt />

          <span>Sair</span>
        </li>
      </button>
    </List>
  );
};

export default LinkBox;
