import { createContext,useState,useEffect } from "react";
 import { getcoll } from "../utils/firebase/firebase.utils";

import SHOP_DATA from '../shop-data';



export const CategoryContext=createContext({

    categoryMap:{},

});


export const CategoryProvider=({children})=>{

    const[categoryMap,setcategorymap]=useState({});

    useEffect(()=>{

        const adcl = async()=>{
          const  categorymap=  await getcoll();
         

          setcategorymap(categorymap);
          
          



        }

        adcl();


       
        

    },[])
    const value ={categoryMap};

    return (
        <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
    )
}
