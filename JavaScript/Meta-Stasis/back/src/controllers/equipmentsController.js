const equipmentsModel = require("../models/equipmentsModel");

const equipmentsController = {
  async queryManager(req, res) {
    const queryType = req.body.queryType;
    const singleId = parseInt(req.body.singleId);
    const equipmentName = req.body.equipmentName;
    const rarities = req.body.rarities;
    const positions = req.body.positions;
    const minLvl = req.body.minLvl;
    const maxLvl = req.body.maxLvl;
    const lang = req.body.lang;

    switch (queryType) {
      case "getEquipmentById":
        const equipmentById = await equipmentsModel.getEquipmentById(singleId);
        if (!equipmentById) {
          return res.status(404).json({
            message: "There is no equipment with this ID in our database",
          });
        }
        res.json(equipmentById);
        break;

      case "getEquipmentsByName":
        const equipmentsByName = await equipmentsModel.getEquipmentsByName(
          equipmentName,
          lang
        );
        if (!equipmentsByName) {
          return res.status(404).json({
            message: "There are no equipments with that name",
          });
        }
        res.json(equipmentsByName);
        break;
      case "getEquipmentsByEverything":
        const equipmentsByEverything =
          await equipmentsModel.getEquipmentsByEverything(
            equipmentName,
            rarities,
            positions,
            minLvl,
            maxLvl,
            lang
          );
        if (!equipmentsByEverything) {
          return res.status(404).json({
            message: "There are no equipments that match those criterias",
          });
        }
        res.json(equipmentsByEverything);
    }
  },
};

module.exports = equipmentsController;
