import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onHandleButtonClick: () => void;
}

export function Header({ onHandleButtonClick }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button onClick={onHandleButtonClick} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
