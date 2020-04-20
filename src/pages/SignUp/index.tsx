import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/images/logo.png';
import { Register } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Seu nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  cpf: Yup.string().required('O cpf é obrigatório'),
  cnpj: Yup.string().required('O cnpj é obrigatório'),
  companyName: Yup.string().required('Nome da empresa obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

const SignUp: React.FC = () => {
  function handleSubmit() {}

  return (
    <Register>
      <img src={logo} alt="logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="cpf" type="text" placeholder="CPF" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Cadastrar</button>
        <Link to="/">Já tem conta? Login</Link>
      </Form>
    </Register>
  );
};

export default SignUp;
