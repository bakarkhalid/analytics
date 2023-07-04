import React, { useState } from 'react';
import Uploader from '@/Module/Uploader';
import Button from '../Button';

interface Main {
    selectedOption?: any;
}

const Mainn: React.FC<Main> = ({ selectedOption }) => {

    const [firstImage, setFirstImage] = useState<any>("")
    const [secondImage, setSecondImage] = useState<any>("")
    const [thirdImage, setThirdImage] = useState<any>("")
    const handleImage = (e: any, name: string) => {
        switch (name) {
            case "first":
                setFirstImage(URL.createObjectURL(e.target.files[0]))
                break;
            case "second":
                setSecondImage(URL.createObjectURL(e.target.files[0]))
                break;
            case "third":
                setThirdImage(URL.createObjectURL(e.target.files[0]))
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div className='chose-file-area'>
                <div className='section-block'>
                    <span className='detail-number'>Upload Telegram Chat</span>
                    <div className="col">
                        <div className='document-block'>
                            <div className='upload-file'>
                                <label htmlFor="premiumPhoto1" className='label'>
                                    <input className='inputHide' id="premiumPhoto1" type='file' onChange={(e) => handleImage(e, "first")} />
                                    {firstImage ? <img src={firstImage} /> : 
                                        <div className="file-area">
                                        <div className="file-image">
                                            <img src="assets/images/document-file.png" alt="document-file" />
                                        </div>
                                        <p>drag or click to select file</p>
                                    </div>
                                    }
                                
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-block'>
                    <span className='detail-number'>Upload Telegram Chatjjj</span>
                    <div className="col">
                        <div className='document-block'>
                            <div className='upload-file'>
                                <label htmlFor="premiumPhoto2" className='label'>
                                    <input className='inputHide' id="premiumPhoto2" type='file' onChange={(e) => handleImage(e, "second")} />
                                    {secondImage ? <img src={secondImage} /> :   <div className="file-area">
                                        <div className="file-image">
                                            <img src="assets/images/document-file.png" alt="document-file" />
                                        </div>
                                        <p>drag or click to select file</p>
                                    </div> }
                                 
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-block'>
                    <span className='detail-number'>Upload Telegram Chat</span>
                    <div className="col">
                        <div className='document-block'>
                            <div className='upload-file'>
                                <label htmlFor="premiumPhoto3" className='label'>
                                    <input className='inputHide' id="premiumPhoto3" type='file' onChange={(e) => handleImage(e, "third")} />
                                    {thirdImage ? <img src={thirdImage} /> : 
                                      <div className="file-area">
                                      <div className="file-image">
                                          <img src="assets/images/document-file.png" alt="document-file" />
                                      </div>
                                      <p>drag or click to select file</p>
                                  </div>
                                    }
                                  
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='file-upload-area'>
                <Button text="Upload" className='upload-btn' />
            </div>
        </>
    );
};

export default Mainn;
