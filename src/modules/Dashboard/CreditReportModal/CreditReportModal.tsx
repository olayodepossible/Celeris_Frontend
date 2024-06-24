import React, { useState } from "react";
import Modal from "react-modal";
import { creditReportformInputs } from "../DashboardImports";
import { CelerisBtn } from "../../../shared/Button";
import Form from "../../../shared/Forms/Form";

Modal.setAppElement("#root");
const CreditReportModal = () => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [creditReportOpen, setCreditReportOpen] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormValidityChange = (isValid: boolean) => {
    setIsFormValid(isValid);
    console.log(modalOpen);
  };
  const handleApplyFilters = (selectedFilters: { [key: string]: string }) => {
    setFilters(selectedFilters);
    console.log("Applied Filters:", selectedFilters, filters, modalOpen);
  };
  return (
    <>
      <Modal
        isOpen={creditReportOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setCreditReportOpen(false)}
      >
        <form className="analysisForm">
          <div className="header w-100">
            <h2 className="title d-flex justify-content-between w-100">
              Check Credit Report
              <span
                className="close"
                onClick={() => setCreditReportOpen(false)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.4 15L10 11.4L13.6 15L15 13.6L11.4 10L15 6.4L13.6 5L10 8.6L6.4 5L5 6.4L8.6 10L5 13.6L6.4 15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88334 18.6867 3.825 17.9743 2.925 17.075C2.025 16.1757 1.31267 15.1173 0.788001 13.9C0.263335 12.6827 0.000667933 11.3827 1.26582e-06 10C-0.000665401 8.61733 0.262001 7.31733 0.788001 6.1C1.314 4.88267 2.02633 3.82433 2.925 2.925C3.82367 2.02567 4.882 1.31333 6.1 0.788C7.318 0.262667 8.618 0 10 0C11.382 0 12.682 0.262667 13.9 0.788C15.118 1.31333 16.1763 2.02567 17.075 2.925C17.9737 3.82433 18.6863 4.88267 19.213 6.1C19.7397 7.31733 20.002 8.61733 20 10C19.998 11.3827 19.7353 12.6827 19.212 13.9C18.6887 15.1173 17.9763 16.1757 17.075 17.075C16.1737 17.9743 15.1153 18.687 13.9 19.213C12.6847 19.739 11.3847 20.0013 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                    fill="#207EDF"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <Form
            isFilter={false}
            inputs={creditReportformInputs}
            onApplyFilters={handleApplyFilters}
            onFormValidityChange={handleFormValidityChange}
            styles="d-flex flex-column justify-content-center align-items-center"
          />
          <CelerisBtn
            variant="primary"
            disabled={!isFormValid}
            onClick={() => setModalOpen(false)}
          >
            Analyze Bank Statement
          </CelerisBtn>
        </form>
      </Modal>
    </>
  );
};

export default CreditReportModal;
