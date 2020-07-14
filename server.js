const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static files
app.use(express.static(path.join(__dirname, "public")));
// create a controller for our note app so we can handle the routes and the rendering of
// views then require the controllers (modules)
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server & listen for requests
app.listen(PORT, function() {
    console.log('server is running and listening on http://localhost:' + PORT)
});
