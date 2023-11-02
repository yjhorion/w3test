import express from "express";
import connect from "./schemas/index.js";
import UserRouter from "./routes/users.router.js"

const app = express();
const PORT = 5000;

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", [UserRouter]);


app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
