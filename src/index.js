// server.js
import { app } from "./app.js";   // ✅ app import karna zaroori hai
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env"   // ✅ dhyaan dena, ye ".env" hona chahiye, aapne "env" likha tha
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`🚀 Server running on port: ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("❌ MongoDB connection failed !!!", err);
});



















// import express from "express";
// const app = express()



// ( async () => {
//  try {
//      await  mongoose.connect(`${process.env.MONGODBURL_URI}/${DB_NAME}`)
//      app.on("error", (error) => {
//         console.log("ERROR:", error);
//         throw error
//      })
  
//      app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`)
//      })


//  }  catch (error) {
//       console.error("ERROR:", error)
//       throw err
//  }
// }) ()

























