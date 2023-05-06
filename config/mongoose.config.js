const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log(`✔✔ Established connection to the MongoDB database Atlas`))
    .catch((err) => console.log(`❌❌ Cannot connect to the MongoDB database`, err));
};