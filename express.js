import express from "express";

const app = express();

app.get("/", (req, res) => {
  // res.send("ok");
  res.send([
    {
      id: 1,
      name: "john",
      age: 22,
      isStudent: true,
    },
  ]);
});

app.get("/:userId", (req, res) => {
  const id = req.params.id;

  // res.send("ok");
  res.send([
    { params: req.params },
    {
      id: 1,
      name: "john",
      age: 22,
      isStudent: true,
    },
  ]);
});

app.listen(4000, () => {
  console.log(4000);
});
