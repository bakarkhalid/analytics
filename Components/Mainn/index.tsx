import React, { useState } from 'react';
import Uploader from '@/Module/Uploader';
import Button from '../Button';

interface Main {
    selectedOption?: any;
}

const Mainn: React.FC<Main> = ({ selectedOption }) => {
    // const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    // const [currentStep, setCurrentStep] = useState<number>(1);
    // const [getShow, setGetShow] = useState(false);
    // const [elected, setElected] = useState("");

    // const button = (button: boolean) => {
    //     setGetShow(button);
    //     setCurrentStep(3);
    // };

    // const handleSelectedFilesChange = (files: File[]) => {
    //     setSelectedFiles(files);
    //     setCurrentStep(currentStep + 1);
    // };

    // const handleOptionSelect = (option: any) => {
    //     setElected(option);
    // };

    const [firstImage, setFirstImage] = useState<any>([])
    const [secondImage, setSecondImage] = useState<any>([])
    const [thirdImage, setThirdImage] = useState<any>([])

    return (
        <>
            <div className='chose-file-area'>
                <div className='section-block'>
                    <span className='detail-number'>Upload Telegram Chat</span>
                    <div className="col">
                        <div className='document-block'>
                            <div className='upload-file'>
                                <Uploader
                                    selectedFiles={firstImage}
                                    onSelectedFilesChange={(event) => {
                                        const files = event.target.files;
                                        if (files) {
                                            const newFiles = [...firstImage, ...Array.from(files)];
                                            setFirstImage(newFiles);
                                        }
                                        console.log(1)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-block'>
                    <span className='detail-number'>Upload Telegram Chat</span>
                    <div className="col">
                        <div className='document-block'>
                            <div className='upload-file'>
                                <Uploader
                                    selectedFiles={secondImage}
                                    onSelectedFilesChange={(event) => {
                                        const files = event.target.files;
                                        if (files) {
                                            const newFiles = [...secondImage, ...Array.from(files)];
                                            setSecondImage(newFiles);
                                        }
                                        console.log(2)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section-block'>
                    <span className='detail-number'>Upload Telegram Chat</span>
                    <div className="col">
                        <div className='document-block'>
                            <div className='upload-file'>
                                <Uploader
                                    selectedFiles={thirdImage}
                                    onSelectedFilesChange={(event) => {
                                        const files = event.target.files;
                                        if (files) {
                                            const newFiles = [...thirdImage, ...Array.from(files)];
                                            setThirdImage(newFiles);
                                        }
                                        console.log(3)
                                    }}
                                />
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
