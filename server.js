// import mongoose from "mongoose";
// import express from "express";
// import dotenv from "dotenv";
// import userRouter from "./routes/userRoute.js";
// dotenv.config();

// const app = express();
// const dbuser = encodeURIComponent(process.env.DBUSER);
// const dbpass = encodeURIComponent(process.env.DBPASS);

// // mongoose
// //   .connect(`mongodb://${dbuser}:${dbpass}@localhost:27017/lpu?authsource=admin`)
// //   .then(() => {
// //     app.listen(8080, () => {
// //       console.log("Server started");
// //     });
// //   });

// mongoose
//   .connect(
//     `mongodb+srv://${dbuser}:${dbpass}@cluster0.hgbdiij.mongodb.net/mernDB`
//   )
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("Server started");
//     });
//   });

// app.use(express.json());

// app.use("/api/users", userRouter);











import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/users", userRouter);

// MongoDB connection
mongoose
  .connect(
    `mongodb+srv://${dbuser}:${dbpass}@cluster0.hgbdiij.mongodb.net/mernDB?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started on port 8080");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });
