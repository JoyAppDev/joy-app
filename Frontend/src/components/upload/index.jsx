import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const URL = '/upload';

export default function UploadButtons() {
    const [file, setFile] = React.useState(null);
    const [uploadedFilePreview, setUploadedFilePreview] = React.useState(false);

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    const handleUpload = async () => {
        if(!file) {
            alert("select file");
            return;
        }

        // Объект FormData позволяет скомпилировать набор пар ключ/значение для отправки с помощью XMLHttpRequest.
        const formData = new FormData();
        // Добавляет новое значение существующего поля объекта FormData, либо создаёт его и присваивает значение
        formData.append('file', file);

        // fetch-запрос на отправку файла на сервер

        const res = await fetch(URL, {
            method: 'POST',
            body: formData,
        });
        const data = await res.json();
        // с сервера возвращается превью загруженного видео для отображения в форме создания лицензии
        setUploadedFilePreview(data.image);
    }

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">
                Upload
                <input hidden accept="video/*" multiple type="file" onChange={handleChange} />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label" onClick={handleUpload}>
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>

            {file && (
                <ul>
                    <li>Name: {file.name}</li>
                    <li>Type: {file.type}</li>
                    <li>Size: {file.size}</li>
                    <li>
                        lastModifiedDate:{" "}
                        {file.lastModified.toLocaleString()}
                    </li>
                </ul>
            )}

            {uploadedFilePreview && (
                <div>
                    <h2>{uploadedFilePreview.fileName}</h2>
                    <img alt='' src={uploadedFilePreview.filePath} width="200" />
                </div>
            )}
        </Stack>
    );
}