import { Avatar, Box, Flex, Text, WrapItem } from "@chakra-ui/react";

export default function Conversation({ name, conversation, currentUser }) {

  return (
    <Box mt="20px">
      <Flex align="center" gap={'10px'}>
        <Box>
          <WrapItem>
            <Avatar
              name="Dan Abrahmov"
              size="lg"
              src="https://cdn-icons-png.flaticon.com/128/236/236832.png"
            />
          </WrapItem>
        </Box>
        <Box>
          <Text fontSize={'25px'} color={'white'}>{name}</Text>
        </Box>
      </Flex>
    </Box>
  );
}
