const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000",
    },
});

let users = [];

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId)
}

const getUser = (userId) => {
    console.log('users:', users)
    return users.find(user => user.userId === userId)
}

io.on("connection", (socket) => {
    console.log("a user connect");
    //take userId and SocketID from user

    socket.on("addUser", async (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    //send and get message
    socket.on("sendMessage", ({ senderId, receivedId, text }) => {
        console.log('receivedId:', receivedId)
        const user = getUser(receivedId);
        console.log('user:', user);
        io.to(user.socketId).emit("getMessage", {
            senderId, text
        })
    })

    //Disconnection
    socket.on("disconnect", () => {
        console.log("A user Disconnected ");
        removeUser(socket.id)
        io.emit("getUsers", users);
    });
});
