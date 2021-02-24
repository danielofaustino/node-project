import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello GoStack " });
});

app.listen(5555, () => {
  console.log("🚀 Server Started on port 5555!");
});
