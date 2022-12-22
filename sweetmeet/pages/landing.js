import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from ".";
import Messenger from "../components/Messenger";

export default function Landing() {
  const [data, setData] = useState([]);

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
