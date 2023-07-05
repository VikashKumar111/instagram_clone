import React, { useState } from 'react'

const ImageUpload = () => {
    const [caption, setCaption] = useState('');

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