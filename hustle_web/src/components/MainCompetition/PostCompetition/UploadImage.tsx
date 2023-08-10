import React, { useState } from 'react';
import * as C from '../Styles';
import UploadImg from '../../../assets/svg/competition-img.svg';

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };
  return (
    <>
      {selectedImage ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>{selectedImage.name}</span>
          <C.CancleImageBtn onClick={handleRemoveImage}>
            <span role='img' aria-label='remove'>
              ❌
            </span>
          </C.CancleImageBtn>
        </div>
      ) : (
        <label>
          <input
            type='file'
            style={{ display: 'none' }}
            accept='image/*'
            onChange={handleImageChange}
          />
          <img
            src={UploadImg}
            alt='업로드 이미지'
            style={{ cursor: 'pointer' }}
          />
        </label>
      )}
    </>
  );
};

export default UploadImage;
