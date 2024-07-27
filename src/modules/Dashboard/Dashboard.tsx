import { useState } from "react";
import Modal from "react-modal";

import Sidebar from "../../Layouts/Sidebar/Sidebar";
import "./Dashboard.css";
import Form from "../../shared/Forms/Form";
import Charts, { ChartType } from "../../shared/Charts/Charts";
import {
  CenterTextPlugin,
  analysisformInputs,
  barChartData,
  barChartoptions,
  creditReportformInputs,
  doughChartData,
  doughChartoptions,
  filterInputs,
  pendingDoughChartData,
  pendingDoughChartoptions,
} from "./DashboardImports";
import { CelerisBtn } from "../../shared/Button";
import DragNDrop from "../../shared/DragNDrop/DragNDrop";
import useChartQuery from "../../utils/customHooks/UseChartQuery";
import Loader from "../../shared/Loader/Loader";

Modal.setAppElement("#root");
const Dashboard = () => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [files, setFiles] = useState<any>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [creditReportOpen, setCreditReportOpen] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormState, setIsFormState] = useState(1);
  const [isUploadLoading, setIsUploadLoading] = useState(false);

  const handleFormValidityChange = (isValid: boolean) => {
    setIsFormValid(isValid);
  };
  const handleApplyFilters = (selectedFilters: { [key: string]: string }) => {
    setFilters(selectedFilters);
    console.log("Applied Filters:", selectedFilters, filters);
  };
  const { isLoading, labels, datas, isError } = useChartQuery();
  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  const handleDragNDrop = (file: any) => {
    setFiles((prevState: []) => [...prevState, file]);
    console.log("selected Files", files);
  };

  return (
    <>
      <Sidebar>
        <div className="content">
          <h2 className="header">Hi, Admin Name,</h2>
          <div className="filters d-flex justify-content-center">
            <Form
              isFilter={true}
              styles="d-flex justify-content-between"
              inputs={filterInputs}
              onApplyFilters={handleApplyFilters}
            />
          </div>
          <div className="d-flex justify-content-evenly flex-lg-row flex-column-reverse">
            <div className="charts d-flex justify-content-start flex-column col-8">
              <div className="barchart">
                <h2 className="header">Job Overview</h2>
                <p className="title">
                  Total Job Volume: <span>1,075</span>
                </p>
                {isLoading === true && (
                  <div className="text-center fs-1">
                    <Loader />
                  </div>
                )}
                {isLoading === false && !isError && (
                  <Charts
                    type={ChartType.Bar}
                    data={{
                      ...barChartData,
                      labels,
                      datasets: [{ ...barChartData.datasets[0], data: datas }],
                    }}
                    options={barChartoptions}
                  />
                )}
              </div>

              <div className="d-flex flex-lg-row flex-column justify-content-between">
                <div className="doughnut">
                  <p className="title">Success Rate</p>
                  <Charts
                    type={ChartType.Doughnut}
                    data={doughChartData}
                    options={doughChartoptions}
                    plugins={[CenterTextPlugin("820")]}
                  />
                </div>
                <div className="doughnut">
                  <p className="title">Processing Issues</p>
                  <Charts
                    type={ChartType.Doughnut}
                    data={pendingDoughChartData}
                    options={pendingDoughChartoptions}
                    plugins={[CenterTextPlugin("820")]}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-column">
              <div className="walletbalance">
                <p className="title">Wallet Balance</p>
                <h2 className="balance">100,500.00</h2>
                <CelerisBtn variant="primary">FUND WALLET</CelerisBtn>
                <a href="#" className="viewtransaction">
                  View Transactions
                </a>
              </div>
              <div className="noofjobs">
                <p className="title">Total Number of Jobs</p>
                <h2 className="balance">602</h2>
                <CelerisBtn variant="primary">ADD NEW JOB</CelerisBtn>
                <ul className="options w-100">
                  <li>
                    <a href="#" onClick={() => setModalOpen(true)}>
                      Analyze Bank Statement
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => setCreditReportOpen(true)}>
                      Credit Search
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => setModalOpen(true)}>
                      Create Scorecard
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Modal
            isOpen={modalOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModalOpen(false)}
          >
            {isFormState === 1 ? (
              <form className="analysisForm">
                <div className="header w-100">
                  <h2 className="title d-flex justify-content-between w-100">
                    Analyze Bank Statement
                    <span className="close" onClick={() => setModalOpen(false)}>
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
                  inputs={analysisformInputs}
                  onApplyFilters={handleApplyFilters}
                  onFormValidityChange={handleFormValidityChange}
                  styles="d-flex flex-column justify-content-center align-items-center"
                />
                <div>
                  <DragNDrop onDrop={handleDragNDrop} />
                </div>
                <div>
                  {files &&
                    files.map((file: any, idx: any) => (
                      <div key={idx} className="file">
                        <span>{file.name}</span>
                        <span
                          className="delete"
                          onClick={() => removeFile(file.name, idx)}
                        >
                          <svg
                            width="15"
                            height="17"
                            viewBox="0 0 15 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.125 16.375C2.64375 16.375 2.23192 16.2038 1.8895 15.8614C1.54708 15.519 1.37558 15.1068 1.375 14.625V3.25H0.5V1.5H4.875V0.625H10.125V1.5H14.5V3.25H13.625V14.625C13.625 15.1062 13.4538 15.5184 13.1114 15.8614C12.769 16.2044 12.3568 16.3756 11.875 16.375H3.125ZM11.875 3.25H3.125V14.625H11.875V3.25ZM4.875 12.875H6.625V5H4.875V12.875ZM8.375 12.875H10.125V5H8.375V12.875Z"
                              fill="#F84444"
                            />
                          </svg>
                        </span>
                      </div>
                    ))}
                </div>
                <CelerisBtn
                  variant="primary"
                  onClick={() => {
                    setIsUploadLoading(true);
                    setTimeout(() => {
                      setIsUploadLoading(false);
                    }, 5000);
                    setIsFormState(2);
                  }}
                >
                  Analyze Bank Statement
                </CelerisBtn>
              </form>
            ) : isUploadLoading ? (
              <div className="loadingModal d-flex justify-content-center flex-column-reverse align-items-center">
                <div className="loading">
                  <Loader />
                </div>
                <p>Processing file, please wait...</p>
              </div>
            ) : (
              <div className="successModal d-flex flex-column align-items-center justify-content-center w-100">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <svg
                    width="88"
                    height="88"
                    viewBox="0 0 88 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44 0C55.6695 0 66.8611 4.6357 75.1127 12.8873C83.3643 21.1389 88 32.3305 88 44C88 55.6695 83.3643 66.8611 75.1127 75.1127C66.8611 83.3643 55.6695 88 44 88C32.3305 88 21.1389 83.3643 12.8873 75.1127C4.6357 66.8611 0 55.6695 0 44C0 32.3305 4.6357 21.1389 12.8873 12.8873C21.1389 4.6357 32.3305 0 44 0ZM38.5189 52.6806L28.7446 42.9C28.3942 42.5496 27.9782 42.2716 27.5204 42.082C27.0625 41.8924 26.5718 41.7948 26.0763 41.7948C25.5807 41.7948 25.09 41.8924 24.6322 42.082C24.1744 42.2716 23.7584 42.5496 23.408 42.9C22.7003 43.6077 22.3028 44.5675 22.3028 45.5683C22.3028 46.5691 22.7003 47.5289 23.408 48.2366L35.8537 60.6823C36.2031 61.0345 36.6188 61.314 37.0767 61.5048C37.5347 61.6955 38.0259 61.7937 38.522 61.7937C39.0181 61.7937 39.5093 61.6955 39.9673 61.5048C40.4252 61.314 40.8409 61.0345 41.1903 60.6823L66.9617 34.9046C67.3168 34.5556 67.5993 34.1398 67.7929 33.6811C67.9865 33.2225 68.0873 32.73 68.0896 32.2322C68.0919 31.7343 67.9957 31.241 67.8064 30.7805C67.617 30.3201 67.3384 29.9016 66.9866 29.5494C66.6348 29.1972 66.2167 28.9181 65.7565 28.7282C65.2963 28.5384 64.803 28.4415 64.3051 28.4432C63.8073 28.445 63.3147 28.5452 62.8558 28.7383C62.3969 28.9313 61.9808 29.2133 61.6314 29.568L38.5189 52.6806Z"
                      fill="#078431"
                    />
                  </svg>
                  <b>File processed successfully!</b>

                  <CelerisBtn
                    variant="primary"
                    onClick={() => setModalOpen(false)}
                  >
                    View analysis
                  </CelerisBtn>
                </div>
              </div>
            )}
          </Modal>
        </div>
        <div>
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
              <CelerisBtn variant="primary" disabled={!isFormValid}>
                Analyze Bank Statement
              </CelerisBtn>
            </form>
          </Modal>
        </div>
      </Sidebar>
    </>
  );
};

export default Dashboard;
