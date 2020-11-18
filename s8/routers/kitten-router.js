const express = require("express");
const { builtinModules } = require("module");
const kittenController = require('/Users/bogdantatu/Desktop/Facultate/WebTech/webtech-1087/s8/routers/controllers/kitten-controllers.js');

const router = express.Router();

// get/kittens?filter=a&pageSize=10&pageNo=4
router.get("/kittens", kittenController.getKittens);
router.post("/kittens", kittenController.addKitten);
router.get("/kittens/:id", kittenController.getKitten);
router.put("/kittens/:id", kittenController.updateKitten);
router.delete("/kittens/:id", kittenController.deleteKitten);

module.exports = router;