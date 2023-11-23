import express from "express";
const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello All</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h2>You can contact me through linkedin and email</h2>")
})

app.get("/about", (req, res) => {
    res.send("<h2>I am Shalini, glad to see you here. Let's get to know more.</h2>")
})

app.listen(port, (req, res) => {
    console.log(`Server started at ${port}`);
})