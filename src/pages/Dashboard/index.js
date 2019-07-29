import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>May 31</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Chico</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Opened</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Amanda</span>
        </Time>
      </ul>
    </Container>
  );
}
