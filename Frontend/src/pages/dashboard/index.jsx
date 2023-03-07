import React, { useEffect } from 'react';
import LayoutDashboard from '../../components/layout-dashboard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import initialData from './../../utils/data.json';
import addLicenceImage from './../../assets/add_licence_image.png';
import PopupSuccess from '../../components/popup-success';

import Modal from '../../components/modal';
import CreateDeal from '../../components/create-deal';
import CopyLink from '../../components/copy-link';

import BasicCard from '../../components/basic-card';
import ButtonCopyLicenseCard from '../../components/button-copy-license-card';
import ButtonCreateLicenseCard from '../../components/button-create-license-card';
import PopupError from "../../components/popup-error";
import Withdraw from '../../components/withdraw';

function Dashboard({ logOut }) {
  const [files, setFiles] = React.useState(null);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [openCreateDealModal, setIsOpenCreateDealModal] = React.useState(false);
  const [openCopyLinkModal, setIsCopyLinkModal] = React.useState(false);
  const [openWithdrawModal, setIsOpenWithdrawModal] = React.useState(false);

  const [openMessage, setOpenMessage] = React.useState(false);
  const [openErrorMessage, setOpenErrorMessage] = React.useState(false);

  const handleOpenCreateDeal = () => setIsOpenCreateDealModal(true);
  const handleCloseCreateDeal = () => setIsOpenCreateDealModal(false);

  const handleCopyLinkModalOpen = () => setIsCopyLinkModal(true);
  const handleCopyLinkModalClose = () => setIsCopyLinkModal(false);

  const handleWithDrawModalOpen = () => setIsOpenWithdrawModal(true);
  const handleWithDrawModalClose = () => setIsOpenWithdrawModal(false);

  const handleOpenMessage = () => setOpenMessage(true);
  const handleCloseMessage = () => {
      setOpenMessage(false);
      setOpenErrorMessage(false);
  }

  const navigate = useNavigate();

  const { user, isSuccess } = useSelector(state => state.auth);

  useEffect(() => {
    if (!user && isSuccess) {
      navigate('/');
    }
  }, [user, navigate, isSuccess]);

  const openLicence = () => {
    handleCopyLinkModalOpen();
  };

  const addLicence = e => {
      setFiles(e.target.files);
      handleOpenCreateDeal();
  };

  function handleCopyLicenseClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <LayoutDashboard logOut={logOut}>
        {initialData.map(obj => (
          <BasicCard
            key={obj.id}
            author={obj.author}
            date={obj.date}
            heading={obj.media}
            // image={uploadedFilePreview} // изображение превью приходит с сервера
            children={
              <ButtonCopyLicenseCard
                card={obj}
                onCopyLicense={handleCopyLicenseClick}
                onOpen={openLicence}
              />
            }
          />
        ))}

        <BasicCard
          heading="Create new license?"
          author="John Doe"
          date="Now"
          image={addLicenceImage}
          children={<ButtonCreateLicenseCard addLicence={addLicence} />}
        />
      </LayoutDashboard>

      <Modal
        openForm={openCreateDealModal}
        handleCloseForm={handleCloseCreateDeal}
        children={
          <CreateDeal
            setOpenForm={setIsOpenCreateDealModal}
            setOpenMessage={setOpenMessage}
            files={files}
            setOpenErrorMessage={setOpenErrorMessage}
          />
        }
      />
      <Modal
        openForm={openCopyLinkModal}
        handleCloseForm={handleCopyLinkModalClose}
        setOpenForm={setIsCopyLinkModal}
        setOpenMessage={setOpenMessage}
        children={
          <CopyLink content={selectedCard} setOpenForm={setIsCopyLinkModal} />
        }
      />

      <Modal
        openForm={openWithdrawModal}
        handleCloseForm={handleWithDrawModalClose}
        setOpenForm={setIsOpenWithdrawModal}
        setOpenMessage={setOpenMessage}
        children={
          <Withdraw
            content={selectedCard}
            setOpenForm={setIsOpenWithdrawModal}
          />
        }
      />
      <PopupSuccess
        openMessage={openMessage}
        handleCloseMessage={handleCloseMessage}
      />
      <PopupError
        openErrorMessage={openErrorMessage}
        handleCloseMessage={handleCloseMessage}
      />

    </>
  );
}

export default Dashboard;
