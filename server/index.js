
const express = require("express");

const app = express();

const port = process.env.PORT || 3000

app.get('',(req, res) => {
    res.send("SoSunny Weather app");
})

app.get('/weather', (req,res) => {
    res.send ("Endpoint for SoSunny weather app.")
})

app.get("*", (req,res) => {
    res.send("Page Not Found.")
})


app.listen(port, () => {
    console.log("server is up and running on port", port);
})