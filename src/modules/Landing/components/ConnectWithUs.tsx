import styles from "../Landing.module.css";
import Imports from "../Landing.imports";
import { CelerisBtn } from "../../../shared/Button";
import { useState } from "react";
import Form from "../../../shared/Form/Form";
import { FormField } from "../../../shared/Form/FormImports";

const ConnectWithUs = () => {
  const [inputvalues, setInputvalues] = useState<{ [key: string]: string }>({});
  const inputs: FormField[] = [
    {
      name:"Name",
      label: "Name",
      type: "text",
      placeholder: "Full name",
      required: true,
      value: [],
    },
    {
      name:"email",
      label: "Business email",
      type: "email",
      placeholder: "myname@company.com",
      required: true,
      value: [],
    },
    {
      name:"company",
      label: "Company",
      type: "text",
      placeholder: "Company Name",
      required: true,
      value: [],
    },
    {
      name:"additional info",
      label: "Please share anything that will help prepare for our meeting",
      type: "text",
      placeholder: "",
    },
  ];
  const handleGetFormValues = (values: { [key: string]: string }) => {
    setInputvalues(values);
    console.log(inputvalues);
  };
  return (
    <section className="container">
      <div className={styles.connect}>
        <img data-aos="zoom-in" src={Imports.connect} alt="" />
        <form className={styles.connectForm}>
          <h3 className={styles.formHeading}>
            Connect with us to schedule a platform demonstration and explore
            potential collaboration opportunities. Complete the form provided,
            and we'll reach out to you promptly.
          </h3>
          <Form
            inputs={inputs}
            onSubmit={handleGetFormValues}
            styles="d-flex flex-column"
          />
          <div className="d-flex align-items-center justify-content-center">
            <div className={styles.submit}>
              <CelerisBtn
                variant="primary"
                rounded="true"
                onClick={(e) => {e.preventDefault(); console.log(inputvalues)}}
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
