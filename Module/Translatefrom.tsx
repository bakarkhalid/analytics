import React, { useEffect, useState } from 'react';
import Select from 'react-select';

interface TranslateProps {
  name?: any;
  options: any;
  select: any;
  onOptionSelect?: any;
  button?: any
}

const TranslateComponent: React.FC<TranslateProps> = ({ name, button, options, select, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState();
  const [selectedOption2, setSelectedOption2] = useState();


  const handleSelect = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    onOptionSelect(selectedOption)
  };
  const handleSelect2 = (selectedOption2: any) => {
    setSelectedOption2(selectedOption2);
  };
  const click = (val: any) => {

    button(val)

  }
  const selectBoth = selectedOption && selectedOption2;

  const [check, setcheck] = useState(true);

  useEffect(() => {
    if (select.length !== 0 && selectedOption && selectedOption2) {
      setcheck(false)
    }
  }, [selectedOption, selectedOption2, select])

  const handel = () => {
    button(true)
  }

  return (
    <>
      <div>

        <div>
          <h4>{name}</h4>
        </div>
        <div className='uploader-box'>
          <label>Form</label>

          <div className='select-area'>
            <Select
              classNamePrefix="react-select"
              defaultValue={selectedOption}
              onChange={handleSelect}
              options={options}
              isClearable
            />
          </div>

          <div className='uploader-box'>
            <label>To Language</label>
            <div className='select-area'>
              <Select
                classNamePrefix="react-select"
                defaultValue={selectedOption2}
                onChange={handleSelect2}
                options={options}
                isClearable
              />
            </div>

            <button
              onClick={
                handel
              }
              className="uploader-btn"
              disabled={check ? true : false}
            >
              TRANSLATE
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default TranslateComponent;
function setcheck(arg0: boolean) {
  throw new Error('Function not implemented.');
}

