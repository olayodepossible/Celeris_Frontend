import "./Settings.css";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import { Box, Tab } from "@mui/material";

import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Organization from "./Organization/Organization";
import ApiReference from "./ApiReference/ApiReference";
import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

type Props = {};

const Settings = (props: Props) => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabs:{name:string, value:any}[] = [
    { name: "Personal Info", value: <PersonalInfo /> },
    { name: "Organization", value: <Organization /> },
    { name: "Api Reference", value: <ApiReference /> },
  ];
  return (
    <Sidebar>
      <div className="settings">
        <h1 className="heading">Settings</h1>
      </div>
      <TabContext value={value}>
        <Box className="d-flex justify-content-between w-100">
          <TabList
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {tabs.map((tab, index) => (
              <Tab label={tab.name} value={`${index + 1}`} />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab, index) => (
          <TabPanel value={`${index + 1}`}>{tab.value}</TabPanel>
        ))}
      </TabContext>
    </Sidebar>
  );
};

export default Settings;
