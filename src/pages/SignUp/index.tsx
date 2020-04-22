import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/images/logo.png';
import { Register } from './styles';
import { Creators  as authCreators } from '../../store/ducks/auth';

const schema = Yup.object().shape({
  name: Yup.string().required('Seu nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.auth.loading);

  function handleSubmit({name, email, password}: any) {
    dispatch(authCreators.signUpRequest(name, email, password))
  }

  return (
    <Register>
      <img src={logo} alt="logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Cadastrar'}</button>
        <Link to="/">Já tem conta? Login</Link>
      </Form>
    </Register>
  );
};

export default SignUp;
