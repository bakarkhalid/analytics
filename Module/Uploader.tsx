import React, { useState } from 'react';

interface UploaderProps {
  name?: string;
  onSelectedFilesChange: (files: any) => void;
  setSelectedFiles?: any
  selectedFiles?: any
}

const Uploader: React.FC<UploaderProps> = ({ name, onSelectedFilesChange, selectedFiles }) => {
  console.log(name)
  // const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const files = event.target.files;
    // if (files) {
    //   const newFiles = [...selectedFiles, ...Array.from(files)];
    //   setSelectedFiles(newFiles);
    // }
    onSelectedFilesChange(event);
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // const files = event.dataTransfer.files;

    // const newFiles = [...selectedFiles, ...Array.from(files)];
    // setSelectedFiles(newFiles);
    onSelectedFilesChange(event);

  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <label htmlFor="premiumPhoto" className='uploader-block'>
        <div
          onDrop={handleFileDrop}
          onDragOver={handleDragOver}
        >
          {!selectedFiles.length && <div className='file-area'>
            <div className='file-image'>
              <img src="assets/images/document-file.png" alt="document-file" />
            </div>
            <p>drag or click to select file</p>
          </div>}

          <div className='input-field'>
            <input type="file" id="premiumPhoto" onChange={handleFileSelect} />
          </div>
          <div>
            {selectedFiles && <div className='pdf-mobile-img'
            >
              <img
                src={selectedFiles}
                alt={selectedFiles.name}
              />
              <p>{selectedFiles && selectedFiles.name}</p>
            </div>}

          </div>
        </div>
      </label>
    </>
  );
};

export default Uploader;
