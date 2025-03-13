const functions = require("firebase-functions/v2/https");
const express = require("express");
const cors = require("cors");
const strapi = require("./strapi"); // Import your Strapi instance

const app = express();
app.use(cors());
app.use(strapi.middleware());

exports.api = functions.onRequest(app);

