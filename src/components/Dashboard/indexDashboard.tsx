import React from 'react';
import { Summary } from '../Summary/indexSummary';
import { TransactionsTable } from '../TransactionsTable/indexTransactionsTable';
import { Container } from './style';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
