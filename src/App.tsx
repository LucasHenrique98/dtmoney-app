import React from 'react';
import { Dashboard } from './components/Dashboard/indexDashboard';
import { Header } from './components/Header/indexHeader';
import { GlobalStyles } from './styles/globalStyles';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Dashboard />
    </>
  );
}
