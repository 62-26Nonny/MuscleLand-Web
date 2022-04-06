import * as React from "react";
import { Tabs, Tab } from "@material-ui/core";
import Total from "./total/Total";
import Rising from "./risingKnee/RisingKnee";
import Jumping from "./jumpingJack/JumpingJack";
import Squat from "./Squat/Squat";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
export default function Mytabs() {
  const [selectedTab, setSelectedTab] = React.useState('1');

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <TabContext value={selectedTab}>
        <TabList onChange={handleChange}>
          <Tab label="Total" value="1" />
          <Tab label="Rising Knee" value="2" />
          <Tab label="Jumping Jack" value="3" />
          <Tab label="Squat" value="4" />
        </TabList>
        <TabPanel value="1"><Total /></TabPanel>
        <TabPanel value="2"><Rising /></TabPanel>
        <TabPanel value="3"><Jumping /></TabPanel>
        <TabPanel value="4"><Squat /></TabPanel>
      </TabContext>
    </div>
  );
}
