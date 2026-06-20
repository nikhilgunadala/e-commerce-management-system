require("dotenv").config();

const app = require("./src/app");
const { connectDB } = require("./src/config/db");

const startServer = async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on PORT: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();