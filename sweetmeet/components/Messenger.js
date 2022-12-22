import { Box, Button, Flex, Input } from "@chakra-ui/react";
import ChatOnline from "./ChatOnline";
import Conversation from "./Conversation";
import styles from "./Css/Messages.module.css";
import Messages from "./Messages";
import SocialProfile from "./profile";

export default function Messenger() {
    return (
        <Flex justify="space-between">
             <Box w="25%" className={styles.chatMenu} bgGradient={'linear(to-r, red.400, orange.500)'}>Profile
                  <SocialProfile/>
            </Box>
           
            <Box w="45%" bg="blue.300" className={styles.chatBox}>Chat Box
                <Box overflowY="auto" h="500px">
                    <Messages own={"hello"} />
                    <Messages />
                    <Messages />
                    <Messages />
                    <Messages own={"hello"} />
                    <Messages />
                </Box>
                <Flex>
                    <Input bg="#fff" placeholder="Write Something" />
                    <Button>Send</Button>
                </Flex>
            </Box>

            <Box w="25%" className={styles.chatMenu} bg="red.300">Chat Menu
                <Input placeholder="Search friend" />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
            </Box>
            {/* <Flex flexDirection="column" w="30%" bg="green.100" className={styles.chatOnline}> Chat Online
                <ChatOnline />
                <ChatOnline />
                <ChatOnline />
            </Flex> */}
        </Flex>
    )
}