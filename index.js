const server = require("./server/index");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`)
})