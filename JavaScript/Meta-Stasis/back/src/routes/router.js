const express = require("express");
// const accountPlayerController = require("../controllers/accountPlayer");
const equipmentsController = require("../controllers/equipmentsController");
const spellsController = require("../controllers/spellsController");
const modifiersController = require("../controllers/modifiersController");

const validationModule = require("../service/validation/validationModule");

// const auth = require("../service/auth");

const router = express.Router();

router
  .route("/equipments")
  .post(
    validationModule.valideEquipmentQuery,
    equipmentsController.queryManager
  );

router
  .route("/spells")
  .post(validationModule.valideSpellQuery, spellsController.queryManager);

router
  .route("/modifiers")
  .post(validationModule.valideModifierQuery, modifiersController.queryManager);

module.exports = router;
