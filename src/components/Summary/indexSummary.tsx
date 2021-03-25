import React, { useContext } from 'react';
import { Container } from './style';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionContext';

export function Summary() {
  const transactions = useContext(TransactionContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saídas" />
        </header>
        <strong> - R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
