const api = require("./src/api");

const PORT = process.env.PORT || 5000;

api.listen(PORT, () => console.log("Server is running at port: " + PORT));
