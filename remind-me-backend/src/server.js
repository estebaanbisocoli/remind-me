const app = require("./app");
const mongoose = require("mongoose");
const config = require("../server-config.js");
async function init() {
  function startServer() {
    return new Promise((resolve, reject) =>
      app.listen(config.PORT, err => {
        if (err) {
          reject(err);
        }
        resolve();
      })
    );
  }

  const connection = await mongoose.connect(config.MONGOOSE_URI, {
    useNewUrlParser: true
  });
  console.log("Conectado a mongo");
  await startServer();
  console.log("listening in port" + config.PORT);
}
init();
