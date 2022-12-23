import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Select,
  useColorModeValue,
  Textarea,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { postSign } from "../redux/user/user.action";

const initialState = {
  name: "",
  age: "",
  email: "",
  desc: "",
  password: "",
  hobbies: [],
  food: [],
  languages: "",
  gender: "",
};

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "hobbies") {
      setForm({ ...form, [name]: value.split(",") });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleClick = () => {
    dispatch(postSign(form));
  };

  return (
    <Flex
      // minH={"100vh"}s
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bgColor={"black"}
      backgroundImage="url('https://i.ibb.co/Q8146sN/logo.png')"
      backgroundPosition={"center"}
      backgroundRepeat="no-repeat"
      backgroundSize={"800px"}
    >
      <Box bgColor={"blackAlpha.600"}>
        <Stack spacing={8} mx={"auto"} maxW={"xl"} py={12}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"} color={"white"}>
              Create Account
            </Heading>
          </Stack>
          <Box
            border={"1px solid pink"}
            borderRadius={"15px"}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack spacing={6}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel color={"pink"} fontSize={"18px"}>
                      Name
                    </FormLabel>
                    <Input
                      onChange={handleChange}
                      name="name"
                      value={form.name}
                      type="text"
                      border="none"
                      borderBottom={"1px solid pink"}
                      color={"white"}
                      fontSize={"14px"}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="age">
                    <FormLabel color={"pink"} fontSize={"18px"}>
                      Age
                    </FormLabel>
                    <Input
                      onChange={handleChange}
                      name="age"
                      value={form.age}
                      type="number"
                      border="none"
                      borderBottom={"1px solid pink"}
                      color={"white"}
                      fontSize={"14px"}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="desc" isRequired>
                <FormLabel color={"pink"} fontSize={"18px"}>
                  Bio
                </FormLabel>
                <Textarea
                  onChange={handleChange}
                  name="desc"
                  value={form.desc}
                  type="text"
                  border="none"
                  borderBottom={"1px solid pink"}
                  color={"white"}
                  fontSize={"14px"}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel color={"pink"} fontSize={"18px"}>
                  Email address
                </FormLabel>
                <Input
                  onChange={handleChange}
                  name="email"
                  value={form.email}
                  type="email"
                  border="none"
                  borderBottom={"1px solid pink"}
                  color={"white"}
                  fontSize={"14px"}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color={"pink"} fontSize={"18px"}>
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    border="none"
                    borderBottom={"1px solid pink"}
                    color={"white"}
                    fontSize={"14px"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel color={"pink"} fontSize={"18px"}>
                  Languages
                </FormLabel>
                <Select
                  name="languages"
                  // value={form.languages}
                  placeholder="Select Language"
                  onChange={handleChange}
                  border="none"
                  borderBottom={"1px solid pink"}
                  color={"white"}
                  fontSize={"14px"}
                >
                  <option style={{ background: "black" }} value="eng">
                    English
                  </option>
                  <option style={{ background: "black" }} value="hin">
                    Hindi
                  </option>
                  <option style={{ background: "black" }} value="bng">
                    Bengali
                  </option>
                  <option style={{ background: "black" }} value="guj">
                    Gujrati
                  </option>
                  <option style={{ background: "black" }} value="tam">
                    Tamil
                  </option>
                  <option style={{ background: "black" }} value="mar">
                    Marathi
                  </option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel color={"pink"} fontSize={"18px"}>
                  {" "}
                  Sexual Orientation
                </FormLabel>
                <Select
                  name="gender"
                  // value={form.languages}
                  placeholder="Select Gender"
                  onChange={handleChange}
                  border="none"
                  borderBottom={"1px solid pink"}
                  color={"white"}
                  fontSize={"14px"}
                >
                  <option style={{ background: "black" }} value="gay">
                    Gay
                  </option>
                  <option style={{ background: "black" }} value="lesbian">
                    Lesbian
                  </option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel color={"pink"} fontSize={"18px"}>
                  Food
                </FormLabel>
                <Select
                  name="food"
                  // value={form.food}
                  placeholder="Choose your favourite food"
                  onChange={handleChange}
                  border="none"
                  borderBottom={"1px solid pink"}
                  color={"white"}
                  fontSize={"14px"}
                >
                  <option style={{ background: "black" }} value="north">
                    North - Indian
                  </option>
                  <option style={{ background: "black" }} value="south">
                    South - Indian
                  </option>
                  <option style={{ background: "black" }} value="italian">
                    Italian
                  </option>
                  <option style={{ background: "black" }} value="mexican">
                    Mexican
                  </option>
                  <option style={{ background: "black" }} value="chinese">
                    Chinese
                  </option>
                  <option style={{ background: "black" }} value="bengali">
                    Bengali
                  </option>
                  <option style={{ background: "black" }} value="rajasthani">
                    Rajasthani
                  </option>
                  <option style={{ background: "black" }} value="gujrati">
                    Gujrati
                  </option>
                </Select>
              </FormControl>
              <FormControl id="hobbies">
                <FormLabel color={"pink"} fontSize={"18px"}>
                  Hobbies
                </FormLabel>
                <Input
                  onChange={handleChange}
                  name="hobbies"
                  value={form.hobbies}
                  type="text"
                  border="none"
                  borderBottom={"1px solid pink"}
                  color={"white"}
                  fontSize={"14px"}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bgGradient="linear(to-r, red.400, orange.500, yellow.500, green.400 )"
                  color={"white"}
                  _hover={{ bgGradient: "linear(to-r, red.400, orange.500)" }}
                  onClick={handleClick}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"} color="white" fontSize={"lg"}>
                  Already a user?{" "}
                  <Link href="/" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}
