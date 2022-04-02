import ShopInfo from "../../featuredInfo/ShopInfo";
import ShopList from "../../featuredInfo/ShopList";
import { useState, useEffect } from "react";
import { axiosNoAuthenInstance } from "../../../axios";

export default function Shop() {
  const [inventoryData, setInventoryData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [typeOfItem, setTypeOfItem] = useState([]);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axiosNoAuthenInstance.get('/user').then((res) =>{
      setUserData(res.data);
    })

    axiosNoAuthenInstance.get('/item').then((res) =>{
      setItemData(res.data);
    })

    axiosNoAuthenInstance.get('/inventory').then((res) =>{
      setInventoryData(res.data);
    })
  },[])

  useEffect(()=> {
    if (itemData)
    {
      const inventoryArr = Array.from(inventoryData)
      const itemArr = Array.from(itemData)

      var countstype = itemArr.reduce((p, c) => {
        var type = c.type;
        if (!p.hasOwnProperty(type)) {
          p[type] = 0;
        }
        p[type]++;
        return p;
      }, {});

      var counts = inventoryArr.reduce((p, c) => {
        var itemID = c.itemID;
        if (!p.hasOwnProperty(itemID)) {
          p[itemID] = 0;
        }
        p[itemID]++;
        return p;
      }, {});

      var itemList = itemArr.map((val) => {
        return {
          id: val.itemID,
          name: val.itemname,
          category: val.type,
          cost: val.price,
          ownedRate: countcheck(counts[val.itemID])/userData.length * 100,
        }
      })

      itemList.sort(function(a, b) {
        return b.ownedRate - a.ownedRate;
      })

      setItemList(itemList)
      
    }
  },[itemData,userData])

  useEffect(() => 
  {
    if (itemData && itemList)
    {
      const itemArr = Array.from(itemData)
      var countstype = itemArr.reduce((p, c) => {
        var type = c.type;
        if (!p.hasOwnProperty(type)) {
          p[type] = 0;
        }
        p[type]++;
        return p;
      }, {});
        
      setTypeOfItem([
        { name: 'Item Amount (item)', costumes: countcheck(countstype.Costume) },
        { name: 'Best seller', costumes: itemList[0] === undefined ? "" : itemList[0].name},
        { name: 'Worst seller', costumes: itemList[itemList.length-1] === undefined ? "" : itemList[itemList.length-1].name }
      ])
    }
  }, [itemList])

  // const typeOfItem = [
  //   { name: 'Item Amount (item)', costumes: countcheck(countstype.Costume) },
  //   { name: 'Worst seller', costumes: 5 },
  //   { name: 'Best seller', costumes: 'Ricardo underwear' }
  // ]

  function countcheck(x) {
    if (!x)return 0
    return x
  }

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "category", headerName: "Category", width: 130 },
    { field: "cost", headerName: "Cost", width: 100 },
    { field: "ownedRate", headerName: "Owned rate (%)", width: 130 },
  ];

  return (
    <div className="shop">
      <ShopInfo rows = {typeOfItem} />
      <ShopList rows = {itemList} columns = {columns}/>
    </div>
  );
}
