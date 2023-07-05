import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { storage , db } from './firebase';

const ImageUpload = () => {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);  
            },
            (error) => {
                //  error message
                console.log(error);
                alert(error.message);
            },
            
            

        )
        
    };

  return (
      <div>
          
          {/*caption input*/}
          {/* file picker */}
          {/* post button */}
          <input type='text' placeholder='Enter a caption....' onChange={event => setCaption(event.target.value)}  value={caption}/>
          <input type='file' onChange={handleChange} />
          <Button onClick={handleUpload}>Upload</Button>
   
      </div>
  )
}

export default ImageUpload