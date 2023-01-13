import React from 'react';
import ModalForm from '../../components/modal-form';
import ModalDashboard from '../../components/modal-dashboard';

function ModalDashboardPage({ open, handleClose }) {
  return (
    <ModalDashboard open={open} handleClose={handleClose}>
      <ModalForm handleClose={handleClose} />
    </ModalDashboard>
  );
}

export default ModalDashboardPage;
