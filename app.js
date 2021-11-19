const express = require("express");
const requestIp = require("request-ip");
const ipRangeCheck = require("ip-range-check");
const is = require("is_js");
const basicAuth = require("basic-auth-connect");

// ::1がクライアントのipアドレスになっているので、これで許可される
const ALLOWIPS = ["127.0.0.1", "xxx.xxx.xx.xxx", "::1"];
const USERNAME = "user";
const PASSWORD = "pass";

const app = express();

// IP Auth
app.all("/*", (req, res, next) => {
  var clientIp = is.ip(req.headers["fastly-client-ip"])
    ? req.headers["fastly-client-ip"]
    : requestIp.getClientIp(req);
  ipRangeCheck(clientIp, ALLOWIPS) ? next() : res.send("Not Allowed");
});

app.use(basicAuth(USERNAME, PASSWORD));

// app.use(express.static(__dirname + "/public/"));
module.exports = app;
