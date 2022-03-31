import * as React from "react";
import { Tabs, Tab } from "@material-ui/core";
import Total from "./total/Total";
import Rising from "./risingKnee/RisingKnee";
import Jumping from "./jumpingJack/JumpingJack";
import Squat from "./Squat/Squat";

export default function Mytabs() {
  const [selectedTab, setSelectedTab] = React.useState("1");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab label="Total" />
        <Tab label="Rising Knee" />
        <Tab label="Jumping Jack" />
        <Tab label="Squat" />
      </Tabs>
      {selectedTab === 0 && <Total />}
      {selectedTab === 1 && <Rising />}
      {selectedTab === 2 && <Jumping />}
      {selectedTab === 3 && <Squat />}
    </div>
  );
}
