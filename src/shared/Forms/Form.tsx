import React, { useState, useEffect } from "react";
import "./Form.css";
import { CelerisBtn } from "../Button";

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
  onFormValidityChange?: (isValid: boolean) => void;
}

const Form = ({
  inputs,
  isFilter,
  button,
  styles,
  onApplyFilters,
  onFormValidityChange,
}: IFilterProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [isFormValid, setIsFormValid] = useState(false);

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

  useEffect(() => {
    // Check if all required fields are filled
    const isValid = inputs.every(
      (input) =>
        !input.isRequired || (input.isRequired && selectedOptions[input.label]),
    );
    setIsFormValid(isValid);
    if (onFormValidityChange) {
      onFormValidityChange(isValid); // Notify parent of form validity change
    }
  }, [inputs, selectedOptions, onFormValidityChange]);

  if (isFilter) {
    return (
      <div className={`filterOption ${styles}`}>
        {inputs.map((input, index) => (
          <div className="selectWrapper" key={index}>
            {input.type === "select" ? (
              <select
                required={input.isRequired}
                onChange={(e) => handleChange(input.label, e.target.value)}
                value={selectedOptions[input.label] || ""}
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
        <CelerisBtn
          variant="primary"
          onClick={handleApplyFilters}
          disabled={!isFormValid}
        >
          {button ? button.text : "Apply Filters"}
        </CelerisBtn>
      </div>
    );
  }
  return (
    <div className={`form ${styles}`}>
      {inputs.map((input, index) => (
        <React.Fragment key={index}>
          {input.type === "select" ? (
            <div className="selectWrapper w-100" key={index}>
              <div className="form-group">
                <label htmlFor="fileType">
                  {input.label}{" "}
                  {input.isRequired ? <span className="star">*</span> : ""}
                </label>
                <select
                  required={input.isRequired}
                  onChange={(e) => {
                    handleChange(input.label, e.target.value);
                    handleApplyFilters();
                  }}
                  value={selectedOptions[input.label] || ""}
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
            <div className="form-group" key={input.label}>
              <label htmlFor={input.label}>
                {input.label}{" "}
                {input.isRequired ? <span className="star">*</span> : ""}
              </label>
              <input
                type={input.type}
                name={input.type}
                id={input.type}
                onChange={(e) => {
                  handleChange(input.label, e.target.value);
                  handleApplyFilters();
                }}
                placeholder={input.placeholder}
                required={input.isRequired}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Form;
