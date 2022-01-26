import express, { Router } from "express";
import articlesRouter from "./articles-router";

const apiRouter = (): Router => {
  const router = express.Router();

  router.use("/articles", articlesRouter());

  return router;
};

export default apiRouter;
