import React from 'react';
import ModalForm from '../../components/modal-form';
import ModalDashboard from '../../components/modal-dashboard';

function ModalDashboardPage({ openForm, handleCloseForm, setOpenForm, setOpenMessage }) {
  return (
    <ModalDashboard openForm={openForm} handleCloseForm={handleCloseForm} setOpenForm={setOpenForm} setOpenMessage={setOpenMessage}>
      <ModalForm setOpenForm={setOpenForm} setOpenMessage={setOpenMessage} />
    </ModalDashboard>
  );
}

export default ModalDashboardPage;
