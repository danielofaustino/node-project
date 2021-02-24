import express from "express";
import routes from "./routes";

const app = express();

app.use(routes);

app.listen(5555, () => {
  console.log("🚀 Server Started on port 5555!");
});
