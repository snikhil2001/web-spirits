import { Avatar, Box, Flex, Heading, WrapItem } from "@chakra-ui/react";

export default function Conversation({ name }) {
  return (
    <Box mt="20px">
      <Flex align="center">
        <Box>
          <WrapItem>
            <Avatar
              name="Dan Abrahmov"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWT3tmbUw0_yhTou2zV5X8RD24eQUt7sO8mZdLFDF4&s"
            />
          </WrapItem>
        </Box>
        <Box>
          <Heading as="h1">{name}</Heading>
        </Box>
      </Flex>
    </Box>
  );
}
