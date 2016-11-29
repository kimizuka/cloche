var express = require("express"),
    app     = require("express")(),
    http    = require("http").Server(app),
    io      = require("socket.io")(http);
 
app.use("/", express.static(__dirname));

io.on("connection", (evt) => {

});

http.listen(3000, "0.0.0.0");
