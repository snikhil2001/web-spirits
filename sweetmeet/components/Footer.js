import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  
  
  export default function Footer() {
    return (
      <Box color={'white'}>
        <Box py={7}>
          <Flex justifyContent={'center'}alignItems="center">
                 <hr borderBottom= {'1px solid'} borderColor= 'useColorModeValue(gray.200, gray.700)' width="60%" margin= {"0 25% 0 25%"}/>
          </Flex>
         
          <Text pt={6} fontSize={'lg'} textAlign={'center'}>
            © 2022 SweetMeet. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }