"use strict";

const http = require("http");
const Tailor = require("node-tailor");

const tailor = new Tailor({
  templatesPath: __dirname + "/templates"
  // The place to define a custom Opentracing tracer like Jaeger, for ex.
  // tracer: initTracer(config, options)
});

// Root Server
http
  .createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      return res.end("");
    }

    req.headers["x-request-uri"] = req.url;
    req.url = "/index";

    tailor.requestHandler(req, res);
  })
  .listen(8080, function() {
    console.log("Tailor server listening on port 8080");
  });

// Fragment server - Any http server that can serve fragments
http
  .createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      return res.end("");
    }

    req.headers["x-request-uri"] = req.url;
    req.url = "/login";

    tailor.requestHandler(req, res);
  })
  .listen(8081, function() {
    console.log("Fragment-login Server listening on port 8081");
  });
