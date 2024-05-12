import express from "express"
const router = express.Router();

import { getStatus , updateStatus } from "../controllers/status.controller.js"

router.get("/admin/get/status", getStatus);
router.patch("/admin/update/status", updateStatus);

export default router;