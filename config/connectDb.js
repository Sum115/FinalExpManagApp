const mongoose = require("mongoose");
const colors = require("colors");

//mongoose.connect(config.DB,{ useNewUrlParser: true });
const uri = "mongodb+srv://motogapp2019:sumit115@cluster0.ibgmvej.mongodb.net/?retryWrites=true&w=majority"
mongoose.set("strictQuery", false);
const connectDb = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
