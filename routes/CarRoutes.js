const express = require("express");
const {
  create,
  all,
  getById,
  deleted,
} = require("../controllers/carController");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "chat-app-images",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

router.post("/", upload.array("images", 5), create);
router.get("/", all);
router.get("/:id", getById);
router.delete("/:id", deleted);

module.exports = router;
