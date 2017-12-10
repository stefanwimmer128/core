import express from "express";
import {
    join,
} from "path";

const app = express();

app.use("/core", express.static(join(__dirname, "public/")));

app.get("/", (req, res) => {
    res.redirect("/core");
})

app.listen(8080, () => {
    console.log("Listening on *:8080...");
});
