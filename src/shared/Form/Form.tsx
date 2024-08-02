// Form.tsx
import React, { useEffect, useState } from "react";
import { handleSubmit, IFormProps } from "./FormImports";
import "./Form.css";



const Form: React.FC<IFormProps> = ({
  inputs,
  button,
  styles,
  onSubmit,
  onFormValidityChange,
}) => {
  const [values, setValues] = useState<{
    [key: string]: string;
  }>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (label: string, value: string) => {
    setValues((prevState) => ({
      ...prevState,
      [label]: value,
    }));
  };



  useEffect(() => {
    const isValid = inputs.every(
      (input) =>
        !input.required || (input.required && values[input.label])
    );
    setIsFormValid(isValid);
    if (onFormValidityChange) {
      onFormValidityChange(isValid); 
    }
  }, [inputs, values, onFormValidityChange]);

  return (
    <div className={`form ${styles}`}>
      {inputs.map((input, index) => (
        <React.Fragment key={index}>
          {input.type === "select" ? (
            <div className="selectWrapper w-100" key={index}>
              <div className="form-group">
                <label htmlFor="fileType">
                  {input.label}{" "}
                  {input.required ? <span className="star">*</span> : ""}
                </label>
                <select
                  required={input.required}
                  onChange={(e) => {
                    handleChange(input.label, e.target.value);
                    handleSubmit(onSubmit, values);
                  }}
                  value={values[input.label] || ""}
                >
                  <option value="">{input.label}</option>
                  {input.value?.map((option, idx) => (
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
                {input.required ? <span className="star">*</span> : ""}
              </label>
              <input
                type={input.type}
                name={input.type}
                id={input.type}
                onChange={(e) => {
                  handleChange(input.label, e.target.value);
                  handleSubmit(onSubmit,values);
                }}
                placeholder={input.placeholder}
                required={input.required}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Form;
