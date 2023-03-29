import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import logo from '../../assets/joy_logo.svg';
import HeaderTabs from '../header-tabs';
import AccountMenu from '../account-menu';
import Modal from '../modal';
import Withdraw from '../withdraw';
import PopupSuccess from '../../components/popup-success';
import Image from './../../assets/withdraw-popup-image.svg';
import './index.css';
import { MAIN_TEXT_WITHDRAW } from '../../utils/constants';

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
        imageContent={
          <Box
            sx={{
              backgroundImage: {
                md: `url(${Image})`,
              },
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
            }}
          />
        }
      />
      <PopupSuccess
        openMessage={openMessage}
        handleCloseMessage={handleCloseMessage}
        mainText={MAIN_TEXT_WITHDRAW}
        mainTextTitle={'Congrats!'}
        buttonText="THANKS"
      />
    </>
  );
}

export default HeaderDashboard;
