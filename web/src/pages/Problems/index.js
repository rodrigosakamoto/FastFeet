import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  MdCreate,
  MdDeleteForever,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

import { Container, List, ModalBox, ModalView, Pagination } from './styles';

import Modal from '~/components/Modal';

import api from '~/services/api';

import { removeProblemRequest } from '~/store/modules/problem/actions';

export default function Problems() {
  const dispatch = useDispatch();
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('/delivery/problems', {
        params: {
          page,
        },
      });

      setProblems(response.data);
    }
    loadProblems();
  }, [problems, page]);

  function handleDelete(id) {
    const resp = window.confirm('Deseja excluir o problema?');
    if (resp === true) {
      dispatch(removeProblemRequest(id));
    }
  }

  async function handleModal(id) {
    const response = await api.get(`delivery/${id}/problems`);

    setItem(response.data);
    console.tron.log(response.data);
    setVisible(!visible);
  }

  function handleClose() {
    setVisible(!visible);
  }

  function handlePage(action) {
    setPage(action === 'next' ? page + 1 : page - 1);
  }

  return (
    <Container>
      <header>
        <p>Problemas na Entrega</p>
      </header>
      <List>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map(problem => (
            <tr key={problem.id}>
              <td>#{problem.id}</td>
              <td>{problem.description}</td>
              <td>
                <Modal>
                  <button type="button" onClick={() => handleModal(problem.id)}>
                    <MdCreate size={24} color="#4D85EE" />
                    Visualizar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(problem.id)}
                  >
                    <MdDeleteForever size={24} color="#DE3B3B" />
                    Cancelar encomenda
                  </button>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </List>
      <Pagination>
        <button
          type="button"
          disabled={page < 2}
          onClick={() => handlePage('back')}
        >
          <MdKeyboardArrowLeft size={24} color="#fff" />
        </button>
        <span>Página {page}</span>
        <button
          type="button"
          disabled={problems.length < 6}
          onClick={() => handlePage('next')}
        >
          <MdKeyboardArrowRight size={24} color="#fff" />
        </button>
      </Pagination>

      <ModalView visible={visible}>
        <ModalBox>
          <button type="button" onClick={handleClose}>
            X
          </button>
          <h2>VISUALIZAR PROBLEMA</h2>
          {item.map(i => (
            <>
            <p>{i.description}</p>
            </>
          ))}
        </ModalBox>
      </ModalView>
    </Container>
  );
}
