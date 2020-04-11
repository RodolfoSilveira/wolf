import React from 'react';
import { FaUsers, FaUserShield, FaTasks } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Wrapper } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Wrapper>
      <div className="header">
        <div className="titulo">
          <h3>Dashboard</h3>
        </div>
        <div className="box-time">
          <div className="time">
            <p>Últimos 30 dias</p>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="box">
          <div className="dados">
            <p>10000</p>
            <h3>Clientes</h3>
          </div>
          <div className="icone">
            <FaUsers />
          </div>
        </div>

        <div className="box">
          <div className="dados">
            <p>10000</p>
            <h3>Funcionários</h3>
          </div>
          <div className="icone">
            <FaUserShield />
          </div>
        </div>

        <div className="box">
          <div className="dados">
            <p>10000</p>
            <h3>Tarefas</h3>
          </div>
          <div className="icone">
            <FaTasks />
          </div>
        </div>
      </div>
      <div className="grafico">
        <div className="titulo">
          <h3>Acessos</h3>
        </div>
        <div className="line">
          <Line data="" width={100} height={35} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
