import ShopInfo from "../../featuredInfo/ShopInfo";
import ShopList from "../../featuredInfo/ShopList";
import { useState, useEffect } from "react";
import { axiosNoAuthenInstance } from "../../../axios";
import { rows } from "../../../data/shopTableData";

export default function Shop() {

  const [inventoryData, setInventoryData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axiosNoAuthenInstance.get('/user').then((res) =>{
      setUserData(res.data);
      //console.log(res.data) 
    })
  },[])


  useEffect(() => {
    axiosNoAuthenInstance.get('/item').then((res) =>{
      setItemData(res.data);
      //console.log(res.data)
    })
  },[])

  useEffect(() => {
    axiosNoAuthenInstance.get('/inventory').then((res) =>{
      setInventoryData(res.data);
      //console.log(res.data)
    })
  },[])

  function countcheck(x) {
    if (!x)return 0
    return x
  }

  const inventoryArr = Array.from(inventoryData)
  const itemArr = Array.from(itemData)

  var counts = inventoryArr.reduce((p, c) => {
    var itemID = c.itemID;
    if (!p.hasOwnProperty(itemID)) {
      p[itemID] = 0;
    }
    p[itemID]++;
    return p;
  }, {});

  var countstype = itemArr.reduce((p, c) => {
    var type = c.type;
    if (!p.hasOwnProperty(type)) {
      p[type] = 0;
    }
    p[type]++;
    return p;
  }, {});

  console.log(rows)
  // console.log(inventoryArr)
  // console.log(counts)
  // console.log(countstype)
  
  const missionList = (Array.from(itemData).map((val,key) => {
    return {
      id: val.itemID,
      name: val.itemname,
      category: val.type,
      cost: val.price,
      ownedRate: countcheck(counts[val.itemID]) /userData.length * 100,
      usedRate: "100"
    }
  }))

  const typeOfItem = [
  { name: 'Item Amount (item)', costumes	: countcheck(countstype.Costume), accessories: countcheck(countstype.Accessories), booster: countcheck(countstype.Accessories)},
  {name: 'Worst seller', costumes: 'Yellow shirt', accessories: 'Sunglasses', booster: 'Durian juice'},
  {name: 'Best seller', costumes: 'Ricardo underwear', accessories: 'Smart watch', booster: 'M150'}
  ]


  console.log(typeOfItem);

  const itemcount = (Array.from(itemData).map((val,key) => {
    return {
      category: val.type
    }
  }))

  //console.log(itemcount)

  return (
    <div className="shop">
      <ShopInfo rows = {typeOfItem}/>
      <ShopList rows = {missionList} />
    </div>
  );


}
