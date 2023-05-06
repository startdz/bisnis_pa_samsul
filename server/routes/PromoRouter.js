import express from "express";
import PromoController from "../controllers/PromoController.js";
import Upload from "../middlewares/Images.js";

const router = express.Router();

router.get("/api/promo/product/", PromoController.getListPromo);
router.post(
  "/api/promo/product/",
  Upload.single("image"),
  PromoController.createPromo
);
router.put(
  "/api/promo/product/:id",
  Upload.single("image"),
  PromoController.updatePromo
);
router.delete("/api/promo/product/:id", PromoController.removePromo);
router.get("/api/promo/product/:id", PromoController.getPromo);

export default router;
