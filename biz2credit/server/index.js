import express, { urlencoded, json } from "express";
import cors from "cors";
import "dotenv/config";

//Database configs
import "./config/dbConnection";

//Routes
import { userRoute, postRoute } from "./routes";

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

//server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

app.use("/api/v1/session", userRoute);
app.use("/api/v1/users", postRoute);

//Homepage
app.use("/", (req, res) => {
  res.send("welcome");
  // res.redirect("/");
});
