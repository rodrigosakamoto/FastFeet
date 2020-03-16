import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logo from '~/assets/fastfeet-logo.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <ul>
            <li>
              <Link to="/recipients">ENCOMENDAS</Link>
            </li>
            <li>
              <Link to="/recipients">ENTREGADORES</Link>
            </li>
            <li>
              <Link to="/recipients">DESTINATÁRIOS</Link>
            </li>
            <li>
              <Link to="/recipients">PROBLEMAS</Link>
            </li>
          </ul>
        </nav>

        <aside>
          <strong>Admin FastFeet</strong>
          <button type="button">sair do sistema</button>
        </aside>
      </Content>
    </Container>
  );
}
