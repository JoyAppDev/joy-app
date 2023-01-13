import React from 'react';
import ModalForm from '../../components/modal-form';
import ModalDashboard from '../../components/modal-dashboard';

function ModalDashboardPage({ openForm, handleCloseForm, setOpenForm }) {
  return (
    <ModalDashboard openForm={openForm} handleCloseForm={handleCloseForm}>
      <ModalForm setOpenForm={setOpenForm} />
    </ModalDashboard>
  );
}

export default ModalDashboardPage;
