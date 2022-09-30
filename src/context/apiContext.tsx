import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

interface AppContextInterface {
  data: string[];
  loading: boolean;
}

export const UserContext = createContext({} as AppContextInterface);

export const UserContextProvider = (props: any) => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserContext.Provider value={{ data, loading }}>
      {props.children}
    </UserContext.Provider>
  );
};
