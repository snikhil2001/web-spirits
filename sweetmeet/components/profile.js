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

  export default function SocialProfile() {
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
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
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
            Lindsey James
          </Heading>
          <Text fontWeight={600} color={'white'} mb={4}>
            @lindsey_jam3s
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
            
            <Box>My age: 24</Box>
            <Box>My hobbies: Reading, Writing, Playing games</Box>
            <Box>Favourite cuisine: North Indian</Box>
          </Stack>
  
          <Stack mt={8} direction={'row'} justify="center" spacing={6}>
            <AiOutlineHeart fontSize={'60px'} color="white" />
            <BsChat fontSize={'50px'}/>
          </Stack>
        </Box>
      </Center>
    );
  }