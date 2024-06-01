import React, { useState } from 'react';
import './Filter.css';
import { CelerisPrimaryBtn } from '../Button';

export interface IInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  isRequired?: boolean | false;
  value: string[];
}

interface IFilterProps {
  inputs: IInputProps[];
  button?: {
    text: string;
    width?: string;
  };
  styles: string;
  isFilter?: boolean | true;
  onApplyFilters?: (selectedFilters: { [key: string]: string }) => void;
}

const Filter = ({
  inputs,
  isFilter,
  button,
  styles,
  onApplyFilters,
}: IFilterProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleChange = (label: string, value: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [label]: value,
    }));
  };

  const handleApplyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters(selectedOptions);
    }
  };
  if (isFilter) {
    return (
      <div className={`filterOption ${styles}`}>
        {inputs.map((input, index) => (
          <div className="selectWrapper" key={index}>
            {input.type === 'select' ? (
              <select
                required={input.isRequired}
                onChange={(e) => handleChange(input.label, e.target.value)}
                value={selectedOptions[input.label] || ''}
              >
                <option value="">{input.label}</option>
                {input.value.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={input.type}
                name={input.type}
                id={input.type}
                onChange={(e) => handleChange(input.label, e.target.value)}
                placeholder={input.placeholder}
                required={input.isRequired}
              />
            )}
          </div>
        ))}
        <CelerisPrimaryBtn
          width={button?.width ? button?.width : ''}
          onClick={handleApplyFilters}
          padding="8px 25px"
        >
          {button ? button.text : 'Apply Filters'}
        </CelerisPrimaryBtn>
      </div>
    );
  }
  return (
    <div className={`form ${styles}`}>
      {inputs.map((input, index) => (
        <>
          {input.type === 'select' ? (
            <div className="selectWrapper w-100" key={index}>
              <div className="form-group">
                <label htmlFor="fileType">
                  {input.label}{' '}
                  {input.isRequired ? <span className="star">*</span> : ''}
                </label>
                <select
                  required={input.isRequired}
                  onChange={(e) => {handleChange(input.label, e.target.value);handleApplyFilters }}
                  value={selectedOptions[input.label] || ''}
                >
                  <option value="">{input.label}</option>
                  {input.value.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div className="form-group">
              <label htmlFor={input.label}>
                {input.label}{' '}
                {input.isRequired ? <span className="star">*</span> : ''}
              </label>
              <input
                type={input.type}
                name={input.type}
                id={input.type}
                onChange={(e) => {handleChange(input.label, e.target.value);handleApplyFilters }}
                placeholder={input.placeholder}
                required={input.isRequired}
              />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Filter;
