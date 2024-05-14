import express, { Application } from "express";
import 'express-async-errors';
import articlesRouter from "./routes/articles";
import categoriesRouter from "./routes/categories";
import errorHandler from './middlewares/errorHandler';
import cors from "cors";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

import * as path from "path";
import fs from 'fs';

const initDb = async () => {
  const dataPath = path.join(__dirname, "./database/data");
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath);
  }

  const mongod = await MongoMemoryServer.create({
    instance: {
      storageEngine: "wiredTiger",
      dbPath: dataPath,
    },
  });

  return mongoose.connect(mongod.getUri());
};
const app: Application = express();
const port = process.env.PORT || 8000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  express.json({
    limit: "2mb",
  })
);
app.use("/articles", articlesRouter);
app.use("/categories", categoriesRouter);

// handle errors
app.use(errorHandler);

initDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
  });
});
