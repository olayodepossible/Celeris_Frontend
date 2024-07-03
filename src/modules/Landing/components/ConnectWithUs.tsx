import styles from "../Landing.module.css";
import Imports from "../Landing.imports";
import { CelerisBtn } from "../../../shared/Button";
import Form, { IInputProps } from "../../../shared/Forms/Form";
import { useState } from "react";

const ConnectWithUs = () => {
  const [inputvalues, setInputvalues] = useState<{ [key: string]: string }>({});
  const inputs: IInputProps[] = [
    {
      label: "Name",
      type: "text",
      placeholder: "Full name",
      isRequired: true,
      value: [],
    },
    {
      label: "Business email",
      type: "email",
      placeholder: "myname@company.com",
      isRequired: true,
      value: [],
    },
    {
      label: "Company",
      type: "text",
      placeholder: "Company Name",
      isRequired: true,
      value: [],
    },
    {
      label: "Please share anything that will help prepare for our meeting",
      type: "text",
      placeholder: "",
      isRequired: true,
      value: [],
    },
  ];
  const handleGetFormValues = (values: { [key: string]: string }) => {
    setInputvalues(values);
    console.log(inputvalues);
  };
  return (
    <section className="container">
      <div className={styles.connect}>
        <img src={Imports.connect} alt="" />
        <form className={styles.connectForm}>
          <h3 className={styles.formHeading}>
            Connect with us to schedule a platform demonstration and explore
            potential collaboration opportunities. Complete the form provided,
            and we'll reach out to you promptly.
          </h3>
          <Form
            inputs={inputs}
            onApplyFilters={handleGetFormValues}
            isFilter={false}
            styles="d-flex flex-column"
          />
          <div className="d-flex align-items-center justify-content-center">
            <div className={styles.submit}>
              <CelerisBtn
                variant="primary"
                rounded="true"
                onClick={() => console.log(inputvalues)}
              >
                Submit
              </CelerisBtn>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConnectWithUs;
