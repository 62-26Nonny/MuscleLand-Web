import "./users.css";
import UserInfo from "../../featuredInfo/UserInfo.js";
import UserList from "../../featuredInfo/UserList.js";
import Chart from "../../chart/Chart";
import { userData } from "../../../data/userData"; 
import { useState,useEffect } from "react"
import { axiosNoAuthenInstance } from "../../../axios";


export default function Users() {
  const [userInfoList, setuserInfoList] = useState([]);
  
  useEffect(() => {
    axiosNoAuthenInstance.get('/user').then((res) =>{
      setuserInfoList(res.data);
      console.log(res.data)
    })
  },[])

  const getArr = Array.from(userInfoList)
  console.log(getArr)
  const userListData = (Array.from(userInfoList).map((val,key) => {
    return { id: val.ID, userName: val.username, status: "Online"}
  }))
  console.log(userListData)

  return (
    <div>
      <div className="users">
        <UserInfo />
        <Chart title="Actvie Users in 1 month" data={userData} grid />
        <UserList rows = {userListData}/>
        {/* {Array.from(userInfoList).map((val, key) => {
          return(
          console.log(key.name)
          ) 
        })} */}
      </div>      
    </div>
  );
}
