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

import {API_URL} from "../../utils/constants";

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

  // функция загрузки и отправки данных на сервер
  const handleUpload = async (files) => {
      if(!file) {
          alert("select file");
          return;
      }
      const token = localStorage.getItem('token');

      // Объект FormData позволяет скомпилировать набор пар ключ/значение для отправки с помощью XMLHttpRequest.
      const formData = new FormData();

      // Добавляет новое значение существующего поля объекта FormData, либо создаёт его и присваивает значение
      formData.append('new_deal', "Second");
      formData.append('license_type', "exclusive");
      formData.append('validity', "2023-02-03");
      formData.append('territory', "world");
      formData.append('ways_to_use', "string");
      formData.append('price', "2000");
      formData.append('additional_info', "string");
      //formData.append('content', files[0]);
      //formData.append('content', files[1]);

      for (let file of files) { formData.append('content', file); }

      console.log(formData);

      // fetch-запрос на отправку файла на сервер
      const res = await fetch(`${API_URL}/api/licenses3/`, {
         method: 'POST',
         headers: {
                 "Authorization": `Token 50f9b141ec8b596db46e3f2334f3d935ee670316`
         },
         body: formData,
      });
         const data = await res.json();
         console.log(JSON.stringify(data));
  // с сервера возвращается превью загруженного видео для отображения в форме создания лицензии
  //    setUploadedFilePreview(data.image);
  }

    const addLicence = e => {
        console.log(e.target.files);
        const files = e.target.files;
        setFile(e.target.files[0]);

        handleUpload(files);

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
