const ws = require('ws');

const wss = new ws.Server({
    port: 1111
})

function isJSONString(string) {
    try {
        JSON.parse(string);
    } catch {
        return false;
    }
    return true;
}
function broadcast(data) {
    sockets.forEach((sock) => {
        sock.send(data);
    })
}

let sockets = [];
wss.on("connection", (socket, req) => {
    sockets.push(socket);
    socket.on("close", () => {
        sockets = sockets.filter(s => s !== socket);
    })
    socket.on("message", (data) => {
        if (!isJSONString(data)) return;
        const parsed = JSON.parse(data);
        switch (parsed.type) {
            case "logon":
                // Not an actual login, just for an announcement in chat that a new user joined
                // Login will be a kind of "account" system only bound to IP without password
                let msgdata = {
                    type: "bc",
                    message: "A new user just joined!"
                }
                broadcast(JSON.stringify(msgdata));
                break;
            case "msg":
                // Relays message to all connected clients
                let msgdata = {
                    type: "msg",
                    message: parsed.message
                }
                broadcast(JSON.stringify(msgdata));
                break;
        }
    })
})