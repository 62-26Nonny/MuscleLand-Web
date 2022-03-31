import "./dungeon.css";
import React, { useState, useEffect } from "react";
import Tab from "../../dungeonTab/Layout.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Total from "../../dungeonTab/total/Total";
import { axiosNoAuthenInstance } from "../../../axios";

const DungeonDataContext = React.createContext();

export { DungeonDataContext };

export default function Dungeon() {
  useEffect(() => {
    axiosNoAuthenInstance.get("/achievement").then((res) => {
      console.log(res.data);
    });
  }, []);

  const [dungeonData, dungeonStat] = useState([]);
  useEffect(() => {
    axiosNoAuthenInstance.get('/dungeonstat').then((res) => {
      dungeonStat(res.data);
      // console.log(res.data)
    })
  }, [])

  return (
    <DungeonDataContext.Provider value={ dungeonData }>
      <Router>
        <div className="dungeonTitle">
          <Switch>
            <Route path="/total">
              <Total />
            </Route>
          </Switch>
          <Tab />
        </div>
      </Router>
    </DungeonDataContext.Provider>
  );
}

