import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content } from './styles';

import logo from '~/assets/logo2.svg';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <ul>
            <li>
              <NavLink to="/deliveries">ENCOMENDAS</NavLink>
            </li>
            <li>
              <NavLink to="/deliverymans">ENTREGADORES</NavLink>
            </li>
            <li>
              <NavLink to="/recipients">DESTINATÁRIOS</NavLink>
            </li>
            <li>
              <NavLink to="/problems">PROBLEMAS</NavLink>
            </li>
          </ul>
        </nav>

        <aside>
          <strong>{profile.name}</strong>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
