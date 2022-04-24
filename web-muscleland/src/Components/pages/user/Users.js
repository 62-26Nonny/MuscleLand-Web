import "./users.css";
import UserInfo from "../../featuredInfo/UserInfo.js";
import UserList from "../../featuredInfo/UserList.js";
import Chart from "../../chart/Chart";
import { userData } from "../../../data/userData"; 
import { useState,useEffect } from "react"
import { axiosNoAuthenInstance } from "../../../axios";
import context from "react-bootstrap/esm/AccordionContext";


export default function Users() {
  const [userInfoList, setuserInfoList] = useState([]);
  const [totalPlayer, settotalPlayer] = useState();
  const [onlinePlayer, setonlinePlayert] = useState();
  const [offlinePlayer, setofflinePlayer] = useState();

  useEffect(() => {
    axiosNoAuthenInstance.get('/user').then((res) =>{
      setuserInfoList(res.data);
      settotalPlayer(res.data.length)
      setonlinePlayert(count(res.data))
      setofflinePlayer(res.data.length - count(res.data))
    })
  },[])

  function count(info) {
    let i = 0
    info.map((val,key) => {
      if (val.last_active == "online") {
        i++
      }
    })
    return i
  }

  function statuscheck(status) {
    if (status == "online") return status
    return "Last Active : " + status
  }

  const userListData = (Array.from(userInfoList).map((val,key) => {
    return { id: val.ID, userName: val.username, status: statuscheck(val.last_active)}
  }))
  
  const columns = [
    { field: "id", headerName: "ID", width: 170 },
    { field: "userName", headerName: "User Name", width: 225 },
    { field: "status", headerName: "Status", width: 130 },
  ];


  return (
    <div>
      <div className="users">
        <UserInfo totalPlayer = {totalPlayer} onlinePlayer = {onlinePlayer} offlinePlayer ={offlinePlayer} />
        {/* <Chart title="Actvie Users in 1 month" data={userData} grid /> */}
        <UserList rows = {userListData} columns = {columns}/>
        {/* {Array.from(userInfoList).map((val, key) => {
          return(
          console.log(key.name)
          ) 
        })} */}
      </div>      
    </div>
  );
}
