const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

// express app setup
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    console.log(name, surname, email);

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: name,
                    LNAME: surname,
                },
            },
        ],
    };

    const jsonData = JSON.stringify(data);
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

// API key
// 3f72c4ae4b731e978d7a00a6f09f560a-us7

// audience id
// 23bd71a188
