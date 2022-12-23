import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
   import {AiOutlineHeart} from "react-icons/ai"
   import {BsChat} from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../redux/user/user.type';

  export default function SocialProfile({token}) {

  const dispatch= useDispatch()

    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          minH={"80vh"}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'4xl'}
            src={
              token.gender=="lesbian"? "https://toppng.com/uploads/preview/user-pro-avatar-scalable-vector-graphics-icon-woman-icon-11553526869tcdfa31pvo.png":
              "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 6,
              right: 5,
            }}
          />
          <Heading fontSize={'4xl'} fontFamily={'body'} color="white" >
            {token?token.name:null}
          </Heading>
          <Text fontWeight={600} color={'white'} mb={4}>
            {token.email}
          </Text>
          <Text
            fontSize={'16px'}
            textAlign={'center'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or{' '}
            me in your posts
          </Text>
  
          <Stack fontSize={'16px'}
            fontWeight={'bold'} color={useColorModeValue('gray.700', 'gray.400')}  align={'center'} justify={'flex-start'} direction={'column'} mt={6}>
            
            <Box>My age: {token.age}, Orientation: {token.gender}</Box>
            <Box>My hobbies: {token.hobbies?token.hobbies.join(""):null}</Box>
            <Box>Favourite cuisine: {token.food}</Box>
          </Stack>
  
          <Stack mt={8} direction={'row'} justify="center" spacing={6}>
            <AiOutlineHeart fontSize={'60px'} color="white" />
            <BsChat fontSize={'50px'}/>
          </Stack>

          <Box marginTop={'16px'} >
             <Button bgGradient="linear(to-r,orange.500, yellow.500, green.400, red.300 )"
             _hover={{ bgGradient: "linear(to-r, red.400, orange.500)" }}
                   fontSize={'18px'} color={"white"} height="50px" width="180px"
                   onClick={()=>dispatch({type:LOGOUT})}>Logout</Button>
          </Box>
        </Box>
      </Center>
    );
  }