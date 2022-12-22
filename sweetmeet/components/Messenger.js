import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Conversation from "./Conversation";
import styles from "./Css/Messages.module.css";
import Messages from "./Messages";
import SocialProfile from "./profile";
import { decodeToken } from "react-jwt";
import { io } from "socket.io-client";
import axios from "axios";

let conversationId = "";


export default function Messenger({ data }) {
  // console.log('data:', data);

  const [tokenDetails, setTokenDetails] = useState({});
  console.log('tokenDetails:', tokenDetails)
  // const [conversationId, setConversationId] = useState("");

  // const dispatch = useDispatch();
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef(io("ws://localhost:8900"))
  const scrollRef = useRef();

  const { isAuth } = useSelector((store) => store.user);

  //socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      })
    })
  }, [])

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChat])

  useEffect(() => {

    console.log(' tokenDetails._id:',  tokenDetails._id)
    socket.current.emit("addUser", tokenDetails._id)
    socket.current.on("getUsers", users => {
      console.log('users from server side to client:', users[0].userid || users[1])
    })
  }, [tokenDetails])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getToken = localStorage.getItem("token");
      const myDecodedToken = decodeToken(getToken);
      setTokenDetails(myDecodedToken)
    }
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages])

  //conversation

  const getConversation = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/api/conversation/${tokenDetails._id}`)
    } catch (e) {
      console.log('e:', e.messages)
    }
  }

  useEffect(() => {
    getConversation();
  }, [tokenDetails])

  //message 
  const getMessages = async (conversationId) => {
    try {
      let res = await axios.get(`http://localhost:3000/api/messages/${conversationId}`)
      setMessages(res.data);

    } catch (e) {
      console.log(e.message)
    }
  }


  const postConversationUser = async (receiverId) => {
    const payload = {
      "senderId": tokenDetails._id,
      receiverId
    }
    try {
      let res = await axios.post(`http://localhost:3000/api/conversation`, payload)
      setCurrentChat(res.data);
      conversationId = res.data._id;
      getMessages(conversationId);
    } catch (e) {
      console.log("e", e.message);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      conversationId: currentChat._id,
      text: newMessage,
      sender: tokenDetails._id
    }
    // console.log('currentChat:', currentChat)
    const receivedId = currentChat.members.find((member) => member !== tokenDetails._id)
    console.log('receivedId:', receivedId)
    socket.current.emit("sendMessage", {
      senderId: tokenDetails._id,
      receivedId,
      text: newMessage
    })
    try {
      let res = await axios.post(`http://localhost:3000/api/messages`, message);
      console.log('res new Message:', res.data)
      setMessages([...messages, res.data])
    } catch (e) {
      console.log(e.message);
    }

    setNewMessage("");
  }

  return (
    <Flex justify="space-between">
      <Box
        w="25%"
        className={styles.chatMenu}
        bgGradient={"linear(to-r, red.400, orange.500)"}
      >
        Profile
        <SocialProfile />
      </Box>

      <Box w="45%" bg="blue.300" className={styles.chatBox}>
        Chat Box
        <Box overflowY="auto" h="500px">
          {currentChat ?
            <Box >
              {
                messages && messages.map((m, index) => (
                  <Box key={index} ref={scrollRef}>
                    <Messages own={m.sender !== tokenDetails._id} messages={m} conversation={conversation} />
                  </Box>
                ))
              }
            </Box>
            :
            <Heading as="h1" bg="red.400">Open Conversation</Heading>}
        </Box>
        <Flex>
          <Input bg="#fff" placeholder="Write Something"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <Button onClick={handleSubmit}>Send</Button>
        </Flex>
      </Box>

      <Box w="25%" className={styles.chatMenu} bg="red.300">
        Chat Menu
        <Input placeholder="Search friend" />

        {data && data.map((el, index) =>
          <Box key={index} onClick={() => {
            postConversationUser(el._id)
            setCurrentChat(el);
            // getMessages(conversationId);
          }}>
            <Conversation key={index} name={el.name} conversation={el} currentUser={tokenDetails} />
          </Box>
        )}

      </Box>
      {/* <Flex
        flexDirection="column"
        w="30%"
        bg="green.100"
        className={styles.chatOnline}
      >
        {" "}
        Chat Online
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
      </Flex> */}
    </Flex>
  );
}
