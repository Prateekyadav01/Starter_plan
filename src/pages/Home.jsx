import { useEffect, useState } from "react";
import Product from '../components/Product';
const Home = () => {
  const [ data , setData] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  useEffect(()=>{
      getData(API_URL);
  },[])
  async function getData (API_URL){
    const response = await fetch(API_URL);
    const data = await response.json();
    setData(data);
    console.log(data);
  }
  return <div>
     {
      data.map((data)=>(
        <Product data={data} key={data.id}/>
      ))
     }

  </div>;
};

export default Home;
