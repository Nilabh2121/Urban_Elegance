import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'



//configure env
dotenv.config();

//database connect
connectDB();

//rest object
const app = express();

//middlewares 
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);


//rest api
app.get("/", (req,res) => {
    res.send("<h1>Welcome To Urban Elegance App</h1>");
});

//PORT 
const PORT = process.env.PORT || 8080;

//listen/run 
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on  ${PORT}`.bgCyan.white);
});