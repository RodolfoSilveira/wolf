import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Wrapper } from './styles';

const CompanyRegister: React.FC = () => {
  function handleSubmit() {}

  return (
    <Wrapper>
      <div className="header">
        <div className="titulo">
          <h3>Cadastro</h3>
        </div>
      </div>
      <div className="section">
        <Form onSubmit={handleSubmit}>
          <p>Dados da empresa:</p>
          <div className="company">
            <Input name="name" type="text" placeholder="Nome" />
            <Input name="social" type="text" placeholder="Razão social" />
            <Input name="cnpj" type="text" placeholder="CNPJ" />
            <Input name="logo" type="file" />
          </div>

          <p>Endereço:</p>
          <div className="location">
            <Input name="cep" type="text" placeholder="CEP" />
            <Input name="state" type="text" placeholder="Estado" />
            <Input name="city" type="text" placeholder="Cidade" />
            <Input name="neighborhood" type="text" placeholder="Bairro" />
            <Input name="street" type="text" placeholder="Rua" />
            <Input name="number" type="text" placeholder="Numero" />
            <div className="add">
              <div className="button">
                <p>+</p>
              </div>
              <div className="info">
                <p> Inserir mais um endereço.</p>
              </div>
            </div>
            <div className="remove">
              <div className="button">
                <p>-</p>
              </div>
              <div className="info">
                <p> remover um endereço.</p>
              </div>
            </div>
          </div>

          <p>Telefone:</p>
          <div className="phone">
            <Input name="phone" type="text" placeholder="Telefone" />
            <Input name="phone" type="text" placeholder="Telefone" />
            <div className="add">
              <div className="button">
                <p>+</p>
              </div>
              <div className="info">
                <p> Inserir mais um telefone.</p>
              </div>
            </div>
            <div className="remove">
              <div className="button">
                <p>-</p>
              </div>
              <div className="info">
                <p> remover um telefone.</p>
              </div>
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="cancel">Cancelar</button>
            <button type="submit" className="submit">Cadastrar</button>
          </div>
        </Form>
      </div>
    </Wrapper>
  );
};

export default CompanyRegister;
