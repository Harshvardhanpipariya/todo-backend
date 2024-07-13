const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database is connection is Successfull"))
    .catch((err) => {
      console.log("Issue in DB conncetion");
      console.error(err.message);
      //iska matlab
      process.exit(1);
    });
};


module.exports = dbConnect;