import express from "express";
// import verification from './routes/verification.js'
import authRoutes from './routes/auth.js'
// import taskRoutes from './routes/task.js'
import mongoose from "mongoose";
import 'dotenv/config'
// import authenticateUser from "./middlewares/authenticateUser.js";
import cors from 'cors'
const app = express();
app.use(express.json()); //poori app pe laga he
app.use(cors("*"))
//connect to database

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("DB connected"))
  .catch((err) => console.log(err))

app.get("/", (req, res) => {
  res.send("hello world");
});

// app.use('/verify', verification)
app.use('/auth', authRoutes)
// app.use('/task', authenticateUser, taskRoutes)


app.listen(process.env.PORT, () => console.log(`Server is running on PORT ${process.env.PORT}`));

