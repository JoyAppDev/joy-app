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

function Dashboard({ logOut }) {
  const [files, setFiles] = React.useState(null);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [openCreateDealModal, setIsOpenCreateDealModal] = React.useState(false);
  const [openCopyLinkModal, setIsCopyLinkModal] = React.useState(false);

  const [newDeal, setNewDeal] = React.useState({});

  const handleOpenCreateDeal = () => setIsOpenCreateDealModal(true);
  const handleCloseCreateDeal = () => setIsOpenCreateDealModal(false);

  const handleCopyLinkModalOpen = () => setIsCopyLinkModal(true);
  const handleCopyLinkModalClose = () => setIsCopyLinkModal(false);

  const [openMessage, setOpenMessage] = React.useState(false);
  const handleOpenMessage = () => setOpenMessage(true);
  const handleCloseMessage = () => setOpenMessage(false);

  const navigate = useNavigate();

  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const openLicence = () => {
    // alert('Open licence');
    handleCopyLinkModalOpen();
  };



    const addLicence = e => {
        //const files = e.target.files;
        setFiles(e.target.files);
        handleOpenCreateDeal();
        //handleUpload(files);
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
            setNewDeal={setNewDeal}
            files={files}
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
      <PopupSuccess
        openMessage={openMessage}
        handleCloseMessage={handleCloseMessage}
      />
    </>
  );
}

export default Dashboard;
