import express from "express";
import {
    join,
} from "path";

const app = express();

app.use("/core", express.static(join(__dirname, "public/")));

app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "public/index.html"));
});

app.listen(8080, () => {
    console.log("Listening on *:8080...");
});
