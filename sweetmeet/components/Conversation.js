import { Avatar, Box, Flex, Heading, WrapItem } from "@chakra-ui/react";

export default function Conversation() {
    return (
        <Box mt="20px">
            <Flex align="center">
         <Box>
         <WrapItem>
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </WrapItem>
         </Box>
         <Box>
            <Heading as="h1">John Doe</Heading>
         </Box>
            
        </Flex>
        </Box >
    )
}