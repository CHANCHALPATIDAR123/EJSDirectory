// const express = require("express");
// const app = express();
// const port = 8080;

// const path = require("path");
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));                                                                                           //folder ke bahr run krne pr view file ko serch ni kr path vo backend  in serch krta h to uska path set krne ke liye en do line ka use krte h 
// app.get("/", (req, res) => {
//     res.render("home.ejs");
// })

// app.get("/rolldices", (req, res) => {
//     let dic = Math.floor(Math.random() * 6) + 1;
//     app.render("this is random number:", { num: dic });
//     //res.render("rolldices.ejs");
// })

// app.listen(port, () => {
//     console.log(`this is port :${port}`);
// });

const express = require("express");
const app = express();
const port = 8080;

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Route for the home page
app.get("/", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1; // Random number for dice roll
    res.render("home.ejs");
});

// Route for the roll dices page
app.get("/rolldices", (req, res) => {
    let dic = Math.floor(Math.random() * 6) + 1;
    res.render("rolldices.ejs", { num: dic });

});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data) {
        res.render("instrgram.ejs", { data });
    } else {
        res.render("error.ejs");
    }

})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
