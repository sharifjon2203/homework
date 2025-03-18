import http from "node:http";
import url from "node:url";

class App {
  constructor() {
    this.routes = new Map();
    this.middlewares = new Set();
  }

  use(middleware) {
    this.middlewares.add(middleware);
  }

  route(method, path, handler) {
    this.routes.set(`${method}:${path}`, handler);
  }

  get(path, handler) {
    this.route("GET", path, handler);
  }
  post(path, handler) {
    this.route("POST", path, handler);
  }
  put(path, handler) {
    this.route("PUT", path, handler);
  }
  delete(path, handler) {
    this.route("DELETE", path, handler);
  }

  parseBody(req) {
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
  }

  async handle(req, res) {
    const parsedUrl = url.parse(req.url, true);
    req.query = parsedUrl.query;
    req.path = parsedUrl.pathname;

    res.json = (data, statusCode = 200) => {
      res.writeHead(statusCode, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    };

    let matchingHandler;
    for (const [key, handler] of this.routes) {
      const [method, path] = key.split(":");
      if (method === req.method) {
        const regex = new RegExp(`^${path.replace(":id", "(\\w+)")}$`);
        // http://localhost:400/user/:id
        const match = req.path.split("/")[1].match(regex);

        if (match) {
          req.params = { id: match[1] };
          matchingHandler = handler;
          break;
        }
      }
    }

    if (["POST", "PUT", "PATCH"].includes(req.method)) {
      try {
        req.body = await this.parseBody(req);
      } catch {
        return res.json({ error: "Invalid JSON" }, 400);
      }
    }

    const middlewareArray = [...this.middlewares];
    let i = 0;
    const next = () =>
      middlewareArray[i]
        ? middlewareArray[i++](req, res, next)
        : matchingHandler
          ? matchingHandler(req, res)
          : res.json({ error: "Route not found" }, 404);
    next();
  }

  listen(port, cb) {
    http.createServer((req, res) => this.handle(req, res)).listen(port, cb);
  }
}

export default App;
