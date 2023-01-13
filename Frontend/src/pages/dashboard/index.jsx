import React from "react";
import LayoutDashboard from "../../components/layout-dashboard";
import LicenceCard from "../../components/licence-card";
import LicenceAddCard from "../../components/licence-add-card";
import ModalDashboard from "../../components/modal-dashboard";

import initialData from "./../../utils/data.json";
import addLicenceImage from "./../../assets/add_licence_image.png";
import PopupSuccess from "../../components/popup-success";

function Dashboard() {
    const [file, setFile] = React.useState(null);
    const [uploadedFilePreview, setUploadedFilePreview] = React.useState(null);

    const [openForm, setOpenForm] = React.useState(false);
    const handleOpenForm = () => setOpenForm(true);
    const handleCloseForm = () => setOpenForm(false);

    const [openMessage, setOpenMessage] = React.useState(false);
    const handleOpenMessage = () => setOpenMessage(true);
    const handleCloseMessage = () => setOpenMessage(false);

    const openLicence = () => {
        alert("Open licence");
    }

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

    const addLicence = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
        alert(e.target.files[0].name);

        //handleUpload();

        // после удачной загрузки видео открывается модальное окно с формой для создания данных лицензии
        handleOpenForm();
    }

    return(
        <>
            <LayoutDashboard>
                {initialData.map((obj) => (
                <LicenceCard
                    key={obj.id}
                    {...obj}
                    // image={uploadedFilePreview} // изображение превью приходит с сервера
                    button='Open licence'
                    handleClick={openLicence}
                />
                ))}
                <LicenceAddCard
                    image={addLicenceImage}
                    handleClick={addLicence}
                />
            </LayoutDashboard>
            <ModalDashboard openForm={openForm} handleCloseForm={handleCloseForm} setOpenForm={setOpenForm} setOpenMessage={setOpenMessage} />
            <PopupSuccess openMessage={openMessage} handleCloseMessage={handleCloseMessage} />
        </>
    )
}

export default Dashboard;