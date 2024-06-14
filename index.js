const express = require('express');

const app = express();

app.get('/', function (req, res){
    res.send("("Hi Swapnil Patil i am From Pune");
});

app.listen(80);
