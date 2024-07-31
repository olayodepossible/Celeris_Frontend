import React, { useState, useEffect } from "react";
import "./Filter.css";
import { CelerisBtn } from "../Button";
import { IFilterProps } from "./FilterImports";



const Filter = ({
  inputs,
  button,
  styles,
  onApplyFilters,
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
      >
        {button ? button.text : "Apply Filters"}
      </CelerisBtn>
    </div>
  );
};

export default Filter;
