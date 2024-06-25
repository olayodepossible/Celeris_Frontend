import Sidebar from "../../Layouts/Sidebar/Sidebar";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import Summary from "./Summary/Summary";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import { CelerisBtn } from "../../shared/Button";
import CRC from "./CRC/CRC";
import CreditRegistry from "./CreditRegistry/CreditRegistry";
import FirstCentral from "./FirstCentral/FirstCentral";
import "./DecisionEngine.css";

const DecisionEngine = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Sidebar>
      <div className="header">
        <h2 className="heading">Samson Falaye.PDF</h2>
        <p className="subheading">ID: 0eutyr785-5bgh-syhghf-fhgjd00rtn</p>
      </div>
      <TabContext value={value}>
        <Box className="d-flex justify-content-between w-100">
          <TabList
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Summary" value="1" />
            <Tab label="Credit Registry" value="2" />
            <Tab label="CRC" value="3" />
            <Tab label="First Central" value="4" />
          </TabList>
          <div className="downloadBtn">
          <CelerisBtn variant="primary">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.13375 9.37671C7.01844 9.25392 6.88051 9.15597 6.72801 9.08858C6.5755 9.0212 6.41148 8.98573 6.2455 8.98425C6.07953 8.98277 5.91493 9.0153 5.76131 9.07994C5.60769 9.14459 5.46812 9.24006 5.35076 9.36078C5.23339 9.4815 5.14057 9.62505 5.07772 9.78306C5.01487 9.94107 4.98324 10.1104 4.98469 10.2811C4.98613 10.4518 5.02061 10.6205 5.08612 10.7774C5.15163 10.9342 5.24686 11.0761 5.36625 11.1947L9.11625 15.0519C9.35066 15.2929 9.66854 15.4283 10 15.4283C10.3315 15.4283 10.6493 15.2929 10.8837 15.0519L14.6337 11.1947C14.8614 10.9522 14.9874 10.6275 14.9846 10.2903C14.9817 9.95323 14.8503 9.63076 14.6185 9.39238C14.3868 9.15399 14.0732 9.01878 13.7455 9.01585C13.4178 9.01292 13.102 9.14251 12.8663 9.37671L11.25 11.0391V3.85714H17.5C18.163 3.85714 18.7989 4.12806 19.2678 4.6103C19.7366 5.09253 20 5.74659 20 6.42857V15.4286C20 16.1106 19.7366 16.7646 19.2678 17.2468C18.7989 17.7291 18.163 18 17.5 18H2.5C1.83696 18 1.20107 17.7291 0.732233 17.2468C0.263392 16.7646 0 16.1106 0 15.4286V6.42857C0 5.74659 0.263392 5.09253 0.732233 4.6103C1.20107 4.12806 1.83696 3.85714 2.5 3.85714H8.75V11.0391L7.13375 9.37671ZM8.75 1.28571C8.75 0.944722 8.8817 0.617695 9.11612 0.376577C9.35054 0.135459 9.66848 0 10 0C10.3315 0 10.6495 0.135459 10.8839 0.376577C11.1183 0.617695 11.25 0.944722 11.25 1.28571V3.85714H8.75V1.28571Z"
                fill="white"
              />
            </svg>
            <span className="ms-1">DOWNLOAD REPORT</span>
          </CelerisBtn>
          </div>
        </Box>
        <TabPanel value="1">
          <Summary />
        </TabPanel>
        <TabPanel value="2">
          <CreditRegistry />
        </TabPanel>
        <TabPanel value="3">
          <CRC />
        </TabPanel>
        <TabPanel value="4">
          <FirstCentral />
        </TabPanel>
      </TabContext>
    </Sidebar>
  );
};

export default DecisionEngine;
