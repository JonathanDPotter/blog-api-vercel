import { Request, Response, Router } from "express";
import path from "path";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../static/index.html"));
});
router.get("/healthcheck", (_req: Request, res: Response) => {
  res.sendStatus(200);
});

export default router;
