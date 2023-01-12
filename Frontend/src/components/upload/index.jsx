import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const URL = '/upload';

export default function UploadButtons() {
    const [file, setFile] = React.useState(null);
    const [uploadedFile, setUploadedFile] = React.useState(false);

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    const handleUpload = async () => {
        if(!file) {
            alert("select file");
            return;
        }
    }

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" onChange={handleChange} />
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

            {uploadedFile && (
                <div>
                    <h2>{uploadedFile.fileName}</h2>
                    <img alt='' src={uploadedFile.filePath} width="200" />
                </div>
            )}
        </Stack>
    );
}