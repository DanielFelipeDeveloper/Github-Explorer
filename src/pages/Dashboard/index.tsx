import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/teste">
          <img
            src="https://avatars0.githubusercontent.com/u/61925435?s=460&u=a9738209b73f083d3c746304e02a663ca4cbe230&v=4"
            alt="Daniel Felipe"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly sacalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
