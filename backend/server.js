require("dotenv").config();
const { api, connectionDB } = require("./src/api");

const PORT = process.env.PORT || 5000;

const main = async () => {
  await connectionDB();

  await api.listen(PORT, () => {
    console.log("Server is running at port: " + PORT);
  });
};
//start
main()
