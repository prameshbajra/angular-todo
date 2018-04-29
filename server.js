const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.use((req, res, next) => {
    res.send("You know you are not supposed to be here ...");
});
app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Starting server at", process.env.PORT || 3000);
}); 