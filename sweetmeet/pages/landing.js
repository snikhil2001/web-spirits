import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Home from ".";
import Messenger from "../components/Messenger";

export default function Landing() {
  const [data, setData] = useState([]);

  const {isAuth} = useSelector(store=>store.user)
  const router = useRouter()

  useEffect(()=>{
      if(!isAuth)
      {
        router.push("/")
      }
  },[isAuth])

  const getData = async () => {
    let token = localStorage.getItem("token");
    let res = await fetch("http://localhost:3000/api/user", {
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    setData(data.user);
  };

  useEffect(function () {
    getData();
  }, []);

  return (
    <Box>
      <Messenger data={data} />
    </Box>
  );
}
