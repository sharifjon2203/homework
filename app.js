// mini-framework.js
import App from "./express.js";

const app = new App();

app.use((req, res, next) => next());

app.get("/", (req, res) => res.json({ message: "Salom dunyo!" }));

app.get("/users", (req, res) => res.json({ users: ["Ali", "Vali", "Hasan"] }));

app.post("/data", (req, res) => res.json({ received: req.body }));

app.put("/users/:id", (req, res) =>
  res.json({
    message: `User with id ${req.params.id} updated.`,
    data: req.body,
  }),
);

app.delete("/users/:id", (req, res) =>
  res.json({ message: `User with id ${req.params.id} deleted.` }),
);

app.listen(3000, () =>
  console.log("Server http://localhost:3000 da ishga tushdi"),
);
