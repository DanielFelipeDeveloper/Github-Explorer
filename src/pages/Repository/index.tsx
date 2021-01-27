import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

// interface RepositoryParams {
//   repository: string;
// }

const Repository: React.FC = () => {
  // const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/61925435?s=460&u=a9738209b73f083d3c746304e02a663ca4cbe230&v=4"
            alt="Daniel"
          />
          <div>
            <strong>DanielDeveloper</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>18078</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link key="asasasas" to="asdsad">
          <div>
            <strong>asdasdas</strong>
            <p>asdasdasd</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
