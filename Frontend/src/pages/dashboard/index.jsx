import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

import LayoutDashboard from '../../components/layout-dashboard';
import addLicenceImage from './../../assets/add_licence_image.png';
import PopupSuccess from '../../components/popup-success';
import Modal from '../../components/modal';
import CreateDeal from '../../components/create-deal';
import CopyLink from '../../components/copy-link';
import BasicCard from '../../components/basic-card';
import ButtonCopyLicenseCard from '../../components/button-copy-license-card';
import ButtonCreateLicenseCard from '../../components/button-create-license-card';
import PopupError from '../../components/popup-error';
import Withdraw from '../../components/withdraw';
import { MAIN_TEXT_CREATE_DEAL } from '../../utils/constants';
import { getCreatives, resetData } from '../../slices/creative-slice';
import Spinner from '../../components/spinner';

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
  const handleWithDrawModalClose = () => setIsOpenWithdrawModal(false);

  const handleCloseMessage = () => {
    setOpenMessage(false);
    setOpenErrorMessage(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess } = useSelector(state => state.auth);
  const { creatives, isError, isLoading, message } = useSelector(
    state => state.content
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user && isSuccess) {
      navigate('/');
    }

    if (user) {
      dispatch(getCreatives(user.id));
    }

    return () => {
      dispatch(resetData());
    };
  }, [dispatch, isError, isSuccess, message, navigate, user]);

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
        {isLoading ? (
          <Spinner />
        ) : creatives.length > 0 ? (
          creatives.map(creative => (
            <BasicCard
              key={creative.instance.id}
              author={creative.instance.creator}
              heading={creative.instance.new_deal}
              // image={uploadedFilePreview} // изображение превью приходит с сервера
              children={
                <ButtonCopyLicenseCard
                  card={creative}
                  onCopyLicense={handleCopyLicenseClick}
                  onOpen={openLicence}
                />
              }
            />
          ))
        ) : null}

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
        imageContent={
          <InsertPhotoOutlinedIcon
            sx={{
              height: '48px',
              width: '48px',
              color: 'grey',
            }}
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
        imageContent={
          <InsertPhotoOutlinedIcon
            sx={{
              height: '48px',
              width: '48px',
              color: 'grey',
            }}
          />
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
        mainText={MAIN_TEXT_CREATE_DEAL}
        mainTextTitle={'Congrats!'}
        buttonText="COPY LINK"
      />
      <PopupError
        openErrorMessage={openErrorMessage}
        handleCloseMessage={handleCloseMessage}
      />
    </>
  );
}

export default Dashboard;
