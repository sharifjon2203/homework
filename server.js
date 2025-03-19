import http from "node:http";
import { parse } from "node:url";
import { v4 } from "uuid";

const users = [
  {
    id: 1,
    name: "john",
    age: 22,
    isStudent: true,
  },
];

const PORT = 4000;
const server = http.createServer(async (req, res) => {
  const { method, url } = req;
  const { pathname } = parse(url, true);
  let id = "";

  if (["PUT", "DELETE", "PATCH", "GET"].includes(method)) {
    const [, , userId] = pathname.split("/");
    id = userId;
  }

  if (["PUT", "PATCH", "POST"].includes(method)) {
    const [, , userId] = pathname.split("/");
    id = userId;
  }

  if (method === "GET") {
    ///get all
    if (pathname.split("/").length == 2) {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(users));
      res.end();
    } else {
      // get one by id
      res.writeHead(200, { "content-type": "application/json" });
      const user = users.find((user) => user.id == id);
      res.write(JSON.stringify(user ? user : "not found"));
      res.end();
    }
  }

  if (method === "POST" && pathname === "/users") {
    let body = await parseBody(req);
    const id = v4();
    const data = {
      id,
      ...body,
    };
    users.push(data);
    res.writeHead(201, { "content-type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  }

  if (method === "PUT") {
    let body = await parseBody(req);
    const userIndex = users.findIndex((user) => user.id == id);

    if (userIndex < 0) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.write("Not found");
      res.end();
      return;
    }

    const user = users[userIndex];

    const updatedUser = {
      ...user,
      ...body,
    };

    users.splice(userIndex, 1, updatedUser);

    res.writeHead(201, { "content-type": "application/json" });
    res.write(JSON.stringify(updatedUser));
    res.end();
  }
  if (method === "DELETE") {
    const userIndex = users.findIndex((user) => user.id == id);
    if (userIndex < 0) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.write("Not found");
      res.end();
      return;
    }

    users.splice(userIndex, 1);
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("seccussfully deleted");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
};
