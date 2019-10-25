const express = require('express');
const jsonServer = require('json-server');
const chokidar = require('chokidar');
const cors = require('cors');

const fileName = process.argv[2] || "./data.js"
const port = process.argv[3] || 6969 ;

let router = undefined;

const app = express();
app.use(cors());

const createServer = () => {
    delete require.cache[require.resolve(fileName)];
    setTimeout(() => {
        router = jsonServer.router(fileName.endsWith(".js") ? require(fileName)() : fileName);
    }, 100)
}

createServer()


app.use(jsonServer.bodyParser)

app.use("/api", (req, res, next) => router(req, res, next));

chokidar.watch(fileName).on("change", () => {
    console.log("Reloading web service....");
    createServer();
    console.log("Completed!!!");
});

app.listen(port, () => console.log(`web service is running on port ${port}`));
