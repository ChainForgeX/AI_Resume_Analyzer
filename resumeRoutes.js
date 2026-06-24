const express = require("express");
const router = express.Router();
const {uploadResume, getResumes} = require("../controllers/resumeController");
const upload = require("../middleware/upload");

router.post("/upload", upload.single("resume"), uploadResume);
router.get("/", getResumes);

module.exports = router;