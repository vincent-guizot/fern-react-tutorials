const jsonServer = require("json-server");
const cors = require("cors");
const PORT = 3000;

const server = jsonServer.create();
const router = jsonServer.router("./data.json");

server.use(cors());
server.use(router);

server.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
