import React from 'react';
import LayoutDashboard from '../../components/layout-dashboard';

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
  const [file, setFile] = React.useState(null);
  const [uploadedFilePreview, setUploadedFilePreview] = React.useState(null);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [openCreateDealModal, setIsOpenCreateDealModal] = React.useState(false);
  const [openCopyLinkModal, setIsCopyLinkModal] = React.useState(false);

  const handleOpenCreateDeal = () => setIsOpenCreateDealModal(true);
  const handleCloseCreateDeal = () => setIsOpenCreateDealModal(false);

  const handleCopyLinkModalOpen = () => setIsCopyLinkModal(true);
  const handleCopyLinkModalClose = () => setIsCopyLinkModal(false);

  const [openMessage, setOpenMessage] = React.useState(false);
  const handleOpenMessage = () => setOpenMessage(true);
  const handleCloseMessage = () => setOpenMessage(false);

  const openLicence = () => {
    // alert('Open licence');
    handleCopyLinkModalOpen();
  };

  // функция загрузки и отправки данных на сервер
  //const handleUpload = async () => {
  //    if(!file) {
  //        alert("select file");
  //        return;
  //    }

  // Объект FormData позволяет скомпилировать набор пар ключ/значение для отправки с помощью XMLHttpRequest.
  //    const formData = new FormData();
  // Добавляет новое значение существующего поля объекта FormData, либо создаёт его и присваивает значение
  //    formData.append('file', file);

  // fetch-запрос на отправку файла на сервер

  //    const res = await fetch(URL, {
  //        method: 'POST',
  //        body: formData,
  //    });
  //    const data = await res.json();
  // с сервера возвращается превью загруженного видео для отображения в форме создания лицензии
  //    setUploadedFilePreview(data.image);
  //}

  const addLicence = e => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
    alert(e.target.files[0].name);

    //handleUpload();

    // после удачной загрузки видео открывается модальное окно с формой для создания данных лицензии
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
