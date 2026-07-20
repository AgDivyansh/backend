import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    process.exit(1);
  }
};

startServer();














/*
import express from "express";

const app = express() ;

;(
    async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) ;
            app.on("error", (error) => {
                console.log("ERROR: ",error);
                throw error;
                
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`);
                
            })

        } catch (error) {
            console.error("ERROR: ", error) ;
        }
    }
)() ;
 */