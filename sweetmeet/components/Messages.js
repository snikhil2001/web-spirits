import { Avatar, Box, Text, WrapItem } from "@chakra-ui/react";
import styles from "./Css/Messages.module.css";
import { format } from "timeago.js";

export default function Messages({ own, messages, }) {
    return (
        <Box mt="20px" className={own ? styles.own : null}>
            <Box w='400px' bg="red.100" >
                <Box>
                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    </WrapItem>
                </Box>
                <Text>{messages.text} </Text>
                <Text bg="green.200">{format(messages.createdAt)}</Text>
            </Box>
        </Box>
    )
}