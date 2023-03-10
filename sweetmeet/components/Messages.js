import { Avatar, Box, Text,Flex, WrapItem } from "@chakra-ui/react";
import styles from "./Css/Messages.module.css";
import { format } from "timeago.js";

export default function Messages({ own, messages, }) {
    return (
        <Box mt="20px" className={own ? styles.own : null}>
            <Box w='400px' bg="teal" borderRadius={'10px'} >
                <Flex alignItems={'center'} gap={'10px'}>
                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png' />
                    </WrapItem>
                    <Text color={'white'} fontSize={'16px'}>{messages.text} </Text>
                </Flex>
                
            </Box>
            <Text>{format(messages.createdAt)}</Text>
        </Box>
    )
}