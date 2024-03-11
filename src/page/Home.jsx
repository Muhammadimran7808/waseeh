import axios from "axios"
import { useEffect, useState } from "react"
import { apikeys } from "./apikey"




const Homepage = ()=>{
    const [data,setData]=useState([])

    const getCard = async () => {
        try {
          const response = await fetch(
            `https://localhost/Zainsite/wp-json/wc/v3/products`,
            {
              method: "GET",
              headers: {
                Authorization: `Basic ${apikeys()}`,
                "Content-Type": "application/json",
              },
            }
          );
    
          if (response.ok) {
            const data = await response.json();
            console.log(data ,"products data")
            setData(data);
          } else {
            throw new Error("Failed to fetch data");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };


    

    useEffect(()=>{
        getCard()
    },[])
    return(
        <>
        {
          Array.isArray(data) && data.map((products)=>(
            <h1>{products.name}</h1>
          ))
        }
        </>
    )
}

export default Homepage