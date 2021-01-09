require("dotenv").config();
const { api, connectionDB } = require("./src/api");

const PORT = process.env.PORT || 5000;

const main = async () => {
  await connectionDB();

  await api.listen(PORT, () => {
    console.log("Server is running at port: " + PORT);
  });
};
// api.listen(PORT, (err) => {
//   if (err) {
//     console.log("Error:", err);
//   }
//   console.log("Server is running at port: " + PORT);
// });
// console.log(connectionDB())

// if (connectionDB) {
//     console.log("sim")
// }
// else {
//     console.log("não")
// }
// console.log(connectionDB());
main()
