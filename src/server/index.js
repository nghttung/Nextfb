import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import next from "next";
const express = require("express");

admin.initializeApp();

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  conf: { distDir: "dist/client" }
});
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
  server.get("/bangtin", (req, res) => {
    const datatest = {};
    return app.render(req, res, "/bangtin", { datatest });
  });

  server.get("/bangtin/:id", (req, res) => {
    const datatest = {
      id: req.params.id
    };

    return app.render(req, res, "/bangtin", { datatest });
  });

  server.get("/bangtin/:id/:slug", (req, res) => {
    const datatest = {
      id: req.params.id,
      slug: req.params.slug
    };

    return app.render(req, res, "/bangtin", { datatest });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
});

exports.serverapp = functions.https.onRequest(server);
