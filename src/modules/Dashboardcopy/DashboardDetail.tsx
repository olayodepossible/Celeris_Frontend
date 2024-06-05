import Sidebar from '../../Layouts/Sidebar/Sidebar';
import './DashboardDetail.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';
import Summary from './Summary/Summary';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import { CelerisPrimaryBtn } from '../../shared/Button';
import Behavioral from './Behavioral/Behavioral';
import CashFlow from './CashFlow/CashFlow';
import Transactions from './Transactions/Transactions';

const DashboardDetail = () => {
  const [value, setValue] = React.useState('1');

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
            <Tab label="Cash Flow Analysis" value="2" />
            <Tab label="Behavioral" value="3" />
            <Tab label="Transactions" value="4" />
          </TabList>
          <CelerisPrimaryBtn padding="10px 21px">
            DOWNLOAD REPORT
          </CelerisPrimaryBtn>
        </Box>
        <TabPanel value="1">
          <Summary />
        </TabPanel>
        <TabPanel value="2">
          <CashFlow />
        </TabPanel>
        <TabPanel value="3">
          <Behavioral />
        </TabPanel>
        <TabPanel value="4">
          <Transactions />
        </TabPanel>
      </TabContext>
    </Sidebar>
  );
};

export default DashboardDetail;
