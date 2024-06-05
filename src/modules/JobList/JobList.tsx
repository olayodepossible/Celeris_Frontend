import React from 'react';
import Table from '../../shared/Table/Table';
import Sidebar from '../../Layouts/Sidebar/Sidebar';
import { columns, data, filterInputs } from './JobListImports';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Filter from '../../shared/Filter/Filter';
import { CelerisDarkBtn } from '../../shared/Button';
import './JobList.css';

const JobList = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Sidebar>
      <div className="header">
        <h2 className="heading">Job List</h2>
        <p className="subheading">
          Gain valuable insights into your credit assessment processes by
          examining key metrics and conducting a comprehensive analysis at a
          strategic level.
        </p>
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Bank Statement Analysis History" value="1" />
            <Tab label="Credit Check History" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="d-flex flex-lg-row flex-column justify-content-between w-100  mb-3">
            <Filter
              inputs={filterInputs}
              styles="d-flex"
              isFilter={true}
              button={{
                text: 'SUBMIT',
              }}
            />
            <CelerisDarkBtn
              font={{ s: '11px', f: 'Poppins', w: 600 }}
              padding="0px 8px"
            >
              ADD NEW JOB
            </CelerisDarkBtn>
          </div>
          <Table
            columns={columns}
            data={data}
            variant="outlined"
            withPagination={true}
          />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Sidebar>
  );
};

export default JobList;
