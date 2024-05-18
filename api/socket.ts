import { io } from "socket.io-client";

export const socket = io("ws://lambtech-final.onrender.com", {
    reconnectionDelayMax: 10000,
});
