import { Avatar, Box, Flex, Text, WrapItem } from "@chakra-ui/react";

export default function Conversation({ name, conversation, currentUser }) {

  return (
    <Box mt="20px">
      <Flex align="center" gap={'10px'}>
        <Box>
          <WrapItem>
            <Avatar
              name="Dan Abrahmov"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWT3tmbUw0_yhTou2zV5X8RD24eQUt7sO8mZdLFDF4&s"
            />
          </WrapItem>
        </Box>
        <Box>
          <Text fontSize={'20px'} color={'white'}>{name}</Text>
        </Box>
      </Flex>
    </Box>
  );
}
