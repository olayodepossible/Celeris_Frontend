import { useState } from 'react';
import Modal from 'react-modal';

import Sidebar from '../../Layouts/Sidebar/Sidebar';
import './Dashboard.css';
import Filter from '../../shared/Filter/Filter';
import Charts, { ChartType } from '../../shared/Charts/Charts';
import {
  barChartData,
  barChartoptions,
  doughChartData,
  doughChartoptions,
  filterInputs,
  formInputs,
  pendingDoughChartData,
  pendingDoughChartoptions,
} from './DashboardImports';
import { CelerisPrimaryBtn } from '../../shared/Button';
import DragNDrop from '../../shared/DragNDrop/DragNDrop';

Modal.setAppElement('#root');
const Dashboard = () => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [files, setFiles] = useState<any>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleApplyFilters = (selectedFilters: { [key: string]: string }) => {
    setFilters(selectedFilters);
    console.log('Applied Filters:', selectedFilters, filters);
  };

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  const handleDragNDrop = (file: any) => {
    setFiles((prevState: []) => [...prevState, file]);
    console.log('selected Files', files);
  };

  return (
    <>
      <Sidebar>
        <div className="content">
          <h2 className="header">Hi, Admin Name,</h2>
          <div className="filters d-flex justify-content-center">
            <Filter
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
                <Charts
                  type={ChartType.Bar}
                  data={barChartData}
                  options={barChartoptions}
                />
              </div>
              <div className="d-flex flex-lg-row flex-column justify-content-between">
                <div className="doughnut">
                  <p className="title">Success Rate</p>
                  <Charts
                    type={ChartType.Doughnut}
                    data={doughChartData}
                    options={doughChartoptions}
                  />
                </div>
                <div className="doughnut">
                  <p className="title">Processing Issues</p>
                  <Charts
                    type={ChartType.Doughnut}
                    data={pendingDoughChartData}
                    options={pendingDoughChartoptions}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-column">
              <div className="walletbalance">
                <p className="title">Wallet Balance</p>
                <h2 className="balance">100,500.00</h2>
                <CelerisPrimaryBtn>FUND WALLET</CelerisPrimaryBtn>
                <a href="#" className="viewtransaction">
                  View Transactions
                </a>
              </div>
              <div className="noofjobs">
                <p className="title">Total Number of Jobs</p>
                <h2 className="balance">602</h2>
                <CelerisPrimaryBtn>ADD NEW JOB</CelerisPrimaryBtn>
                <ul className="options w-100">
                  <li>
                    <a href="#" onClick={() => setModalOpen(true)}>
                      Analyze Bank Statement
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => setModalOpen(true)}>
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
            <form className="analysisForm">
              <div className="header w-100">
                <h2 className="title d-flex justify-content-between w-100">Analyze Bank Statement
                <span className="close" onClick={() => setModalOpen(false)}>
                  X
                </span>
                </h2>
                
              </div>
              <Filter
                isFilter={false}
                inputs={formInputs}
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
              <CelerisPrimaryBtn width="100%" padding="11px">
                Analyze Bank Statement
              </CelerisPrimaryBtn>
            </form>
          </Modal>
        </div>
      </Sidebar>
    </>
  );
};

export default Dashboard;
