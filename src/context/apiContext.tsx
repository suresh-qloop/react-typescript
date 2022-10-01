import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

interface AppContextInterface {
    data: string[];
    loading: boolean;
    getData: () => void;
  }

export const UserContext = createContext({} as AppContextInterface);

export const UserContextProvider = (props: any) => {
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      getData()
    }, []);


    const getData = ()=>{
      console.log('on click');
      
      setData([])
      setLoading(true)
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });

    }


  return (
    <UserContext.Provider value={{ data , loading , getData }}>
      {props.children}
    </UserContext.Provider>
  );
};