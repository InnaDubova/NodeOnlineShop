const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Include shop routes
const shopRoutes = require("./routes/shopRoutes");
// const errorController = require("./controllers/errorController");

const PORT = 8000;
const app = express();

app.set("view engine","ejs");
app.set("views","views")
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "static")));


app.use(shopRoutes);
// app.use(errorController.get404);

app.listen(PORT,() => console.log(`Server running on port ${PORT}`))