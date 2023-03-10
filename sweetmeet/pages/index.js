import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Image,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/router"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { postLogin } from "../redux/user/user.action";

const initialState = { email: "", password: "" };

export default function Home() {
  const router = useRouter()
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(postLogin(form));
    
  };

  useEffect(() => {
    if (isAuth) {
      router.push("/landing")
    }
  }, [isAuth]);

  return (
    <Box bg={"black"}>
      <Navbar />

      <Stack align={"center"} >
        <Text fontSize={"5xl"} color={'white'} >
          "No pretenses. No games. Just real dates."
        </Text>
        <Text fontSize={"2xl"} color={'white'}>Love is Love</Text>
      </Stack>

      <Flex minH={"65vh"} align={"center"} justify={"space-evenly"} gap="2rem">
        <Box>
          <Image src="https://i.ibb.co/Br558sN/landing.webp" alt="logo" />
        </Box>

        <Flex align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Box
              boxShadow={"lg"}
              p={8}
              border={"1px solid pink"}
              borderRadius={"15px"}
            >
              <Box marginBottom={"4rem"}>
                <Image src="https://i.ibb.co/LS2Q2fD/efc2b0c145dbabbfd1d930a6f80e00eb-removebg-preview.png" />
              </Box>
              <Stack spacing={4}>
                <FormControl id="email">
                  <Input
                    name="email"
                    placeholder="email"
                    color="white"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password">
                  <Input
                    name="password"
                    placeholder="password"
                    color="white"
                    value={form.password}
                    onChange={handleChange}
                    type="password"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bgGradient="linear(to-r, red.400, orange.500, yellow.500, green.400 )"
                    color={"white"}
                    _hover={{ bgGradient: "linear(to-r, red.400, orange.500)" }}
                    onClick={handleSubmit}
                  >
                    Sign in
                  </Button>
                  <Divider />
                  <Button
                    bgGradient="linear(to-r, red.400, orange.500, yellow.500, green.400 )"
                    color={"white"}
                    _hover={{ bgGradient: "linear(to-r, red.400, orange.500)" }}
                    onClick={handleSubmit}
                  >
                    <Link href="/signup" align={"center"}>
                      {" "}
                      Create an account
                    </Link>
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Flex>

      <Footer/>
    </Box>
  );
}
