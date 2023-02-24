import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import logo from '../../assets/joy_logo.svg';
import HeaderTabs from '../header-tabs';
import AccountMenu from '../account-menu';
import Modal from '../modal';
import Withdraw from '../withdraw';
import PopupSuccess from '../../components/popup-success';
import './index.css';

const mainText = `Request has been created.`;

function HeaderDashboard() {
  const [openWithdrawModal, setIsOpenWithdrawModal] = React.useState(false);
  const handleWithdrawModalOpen = () => setIsOpenWithdrawModal(true);
  const handleWithdrawModalClose = () => setIsOpenWithdrawModal(false);
  const [openMessage, setOpenMessage] = React.useState(false);

  const handleCloseMessage = () => setOpenMessage(false);

  const onOpenWithdraw = () => {
    handleWithdrawModalOpen();
  };

  const onCloseWithdraw = () => {
    handleWithdrawModalClose();
  };

  return (
    <>
      <>
        <div className="header__dashboard">
          <Box
            sx={{
              boxShadow:
                '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
            }}
          >
            <Box
              maxWidth="lg"
              sx={{
                height: 75,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxSizing: 'border-box',
                margin: '0 auto',
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Stack
                direction="row"
                spacing={5}
                alignItems="center"
                justifyContent="center"
              >
                <img
                  src={logo}
                  alt="{item.title}"
                  loading="lazy"
                  style={{ width: 103, height: 35 }}
                />
                <HeaderTabs sx={{ alignSelf: 'end' }} />
              </Stack>
              <AccountMenu onOpenWithdraw={onOpenWithdraw} />
            </Box>
          </Box>
        </div>
      </>
      <Modal
        openForm={openWithdrawModal}
        handleCloseForm={onCloseWithdraw}
        children={
          <Withdraw
            setOpenForm={setIsOpenWithdrawModal}
            setOpenMessage={setOpenMessage}
          />
        }
      />
      <PopupSuccess
        openMessage={openMessage}
        handleCloseMessage={handleCloseMessage}
        mainText={mainText}
        mainTextTitle={'Congrats!'}
        buttonText="THANKS"
      />
    </>
  );
}

export default HeaderDashboard;
