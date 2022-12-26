import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Stack,
  Image
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';

export default function PostWithLike({disable,data}) {
  const [liked, setLiked] = useState(false);
  const [flag,setFlag] = useState(false)
  
  console.log("cardData:",data)
  const handleDisable=()=>{
    // console.log(flag)
    setFlag(!flag)
    disable(flag)
  }

  return (
    <Center py={6}>
      <Box
        w="lg"
        rounded={'lg'}
        my={5}
        mx={[0, 5]}
        minH={'80vh'}
        overflow={'hidden'}
        bg={'		#F5F5F5'}
        borderBottomRadius={'10px'}
       >
        <Box h={'400px'}>
          <Img
            src={
              'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/24/1528725844-call-me-by-your-name-poster.jpg'
            }
            roundedTop={'sm'}
            roundedBottom={'md'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        
        <Box px={'2'}>
          <Text color={'black'} fontSize={'4xl'} fontWeight={'semibold'} noOfLines={1}>
            {data?data.name:null}
          </Text>
        </Box>

        <Box p={3} >
          <Box
            display={'flex'}
            justifyContent={'left'}
            alignItems={'center'}>
              <Text fontSize={'3xl'} fontWeight="medium" color={'gray.500'} >{data?data.age:null},{data?data.gender:null}</Text>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Gender_neutral.svg/791px-Gender_neutral.svg.png" width="35px" />
             
          </Box>

          <Text color={'gray.500'} fontSize={'18px'} noOfLines={2}>
            {data.desc}
          </Text>
        </Box>

        <Stack align={'left'} p={'4'} justify={'flex-start'} direction={'column'}>
            <Box color="red.300" fontSize={'18px'}  fontWeight={'semibold'} >My hobbies: {data.hobbies?data.hobbies.join(","):null}</Box>
            <Box color="red.300" fontSize={'18px'}  fontWeight={'semibold'}>Favourite cuisine: {data.food?data.food:null}</Box>
        </Stack>

        <Flex bgGradient={"linear(to-r, red.400, orange.500)"} p={'4'}>
         
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'50px'} />
            ) : (
              <BsHeart fontSize={'50px'} />
            )}
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'4xl'} fontWeight={'semibold'} color={'white'} onClick={handleDisable} >
              Chat
            </Text>
            <BsArrowUpRight />
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}