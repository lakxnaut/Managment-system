import React from 'react';
import { useState } from 'react';
import { APICALLKARWA } from '../api/APICALLKRWA';


export default function FileUploader(props) {

    const [xslFile, setXslFile] = useState('');
    const [file, setFile] = useState();

    const handleUpload = async (xslFile) => {
        console.log(xslFile);
        const formData = new FormData();
        formData.append('fileName', xslFile);
        APICALLKARWA.PostXL(formData, 'exceltoJson');
        props.getAllData();
    };

    const handleImageUpload = (e) => {
        console.log(e.target.files[0]);
        const form = new FormData();
        form.append('fileName', e.target.files[0]);
        console.log(form);
        APICALLKARWA.PostImage(form, 'uploadImage').then(res => {
            console.log(res);
        });
        props.getAllData();
    };

    return (
        <div>
            <h2>File Uploader</h2>
            <button>

                <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        handleUpload(event.target.files[0]);
                    }}
                />
            </button>

            <h2>Add Image:</h2>

            <input type="file" onChange={(e) => handleImageUpload(e)} />

        </div>
    );


}