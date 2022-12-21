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
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="age">
                  <FormLabel>Age</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Languages</FormLabel>
              <Select placeholder='Select Language'>
                   <option value="eng">English</option>
                   <option value="hin">Hindi</option>
                   <option value="bng">Bengali</option>
                   <option value="guj">Gujrati</option>
                   <option value="tam">Tamil</option>
                   <option value="mar">Marathi</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Food</FormLabel>
              <Select placeholder='Choose your favourite food'>
                   <option value="north">North - Indian</option>
                   <option value="south">South - Indian</option>
                   <option value="italian">Italian</option>
                   <option value="mexican">Mexican</option>
                   <option value="chinese">Chinese</option>
                   <option value="bengali">Bengali</option>
                   <option value="rajasthani">Rajasthani</option>
                   <option value="gujrati">Gujrati</option>
              </Select>
            </FormControl>
            <FormControl id="hobbies" >
              <FormLabel>Hobbies</FormLabel>
              <Input type="text" />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href="/" color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}