import { Avatar, Box, Flex, Input, Text, WrapItem } from "@chakra-ui/react";
import Conversation from "./Conversation";
import styles from "./Css/Messages.module.css";

export default function Messages({ own }) {
    return (
        <Box mt="20px" className={own ? styles.own : null}>
            <Box w='400px' bg="red.100" >
                <Box>
                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    </WrapItem>
                </Box>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                <Text bg="green.200">1 hour</Text>
            </Box>
        </Box>
    )
}