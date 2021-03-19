import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard/indexDashboard';
import { Header } from './components/Header/indexHeader';
import { GlobalStyles } from './styles/globalStyles';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {
  //prettier-ignore
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransaction = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransaction = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <>
      <GlobalStyles />
      <Header onHandleButtonClick={handleOpenNewTransaction} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransaction}
      >
        <h1>Teste</h1>
      </Modal>
    </>
  );
}
