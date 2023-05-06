import express from "express";
import ContactController from "../controllers/ContactController.js";
import Update from "../middlewares/Images.js";

const router = express.Router();

router.get("/api/owner/contact", ContactController.getContacts);
router.get("/api/owner/contact/:id", ContactController.getContact);
router.post(
  "/api/owner/contact",
  Update.single("image"),
  ContactController.createContact
);
router.put(
  "/api/owner/contact/:id",
  Update.single("image"),
  ContactController.updateContact
);
router.delete("/api/owner/contact/:id", ContactController.removeContact);

export default router;
