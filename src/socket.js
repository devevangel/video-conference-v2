import io from "socket.io-client";
const sockets = io("https://ancient-retreat-51398.herokuapp.com", {
  autoConnect: true,
  forceNew: true,
});
// const sockets = io("/");
export default sockets;
