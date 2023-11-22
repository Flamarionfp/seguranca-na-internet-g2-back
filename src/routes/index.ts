import {
  getResumeController,
  listResumesController,
  registerResumeController,
} from "@/controllers";
import { Router } from "express";

const router = Router();

router.get("/resume/:id", getResumeController.handle);
router.get("/resumes", listResumesController.handle);
router.post("/resume", registerResumeController.handle);

export default router;
