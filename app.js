const express = require('express');
const path = require("path")
const app = express();
//HTML pages
app.get("/" , (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname, "/index.html"));
})
app.get("/about" , (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname, "/about.html"));
})
//CSS
app.get("/style.css" , (req, res) => {
    res.status(200);
    res.contentType("text/css");
    res.sendFile(__dirname + "/style.css");
})
app.get("/style2.css" , (req, res) => {
    res.status(200);
    res.contentType("text/css");
    res.sendFile(__dirname + "/style2.css");
})
//JS
app.get("/script.js" , (req, res) => {
    res.status(200);
    res.contentType("text/js");
    res.sendFile(__dirname + "/script.js");
})
//Images

app.get("/bg3.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/bg3.jpg"));
})
app.get("/bg.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/bg.jpg"));
})
app.get("/bg4.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/bg4.jpg"));
})

app.get("/c1.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/c1.jpg"));
})
app.get("/c2.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/c2.jpg"));
})
app.get("/c3.png" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/c3.png"));
})
app.get("/logo.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/logo.jpg"));
})
app.get("/p1.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/p1.jpg"));
})
app.get("/p2.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/p2.jpg"));
})
app.get("/p3.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/p3.jpg"));
})
app.get("/p4.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/p4.jpg"));
})
app.get("/p5.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/p5.jpg"));
})



//team photo
app.get("/about/team_photo" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "team_photo.jpg"));
})

//Youtube
app.get("/video",(req, res)=>res.redirect('https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps'))



app.set("port", 3000 || process.env.PORT)
app.listen(app.get("port"), () => {
    console.log(`Express server is running on localhost:${app.get("port")}. Press CTRL+C to terminate... `)

});