const client = require("../db/mongo");
const errorHandler = require("../service/errorHandler");
const debug = require("debug")("model-equipments");

const db = client.db("Metastasis");
const collection = db.collection("Equipments");

const equipmentsModel = {
  async getEquipmentById(singleId) {
    try {
      const result = await collection.findOne({ id: singleId });
      return result;
    } catch (error) {
      debug(error);
      errorHandler.logError(error);
    }
  },
  async getEquipmentsByName(equipmentName, lang) {
    try {
      let result;
      switch (lang) {
        case "fr":
          result = collection.find({
            titleFR: { $regex: equipmentName, $options: "i" },
          });
          break;
        case "en":
          result = collection.find({
            titleEN: { $regex: equipmentName, $options: "i" },
          });
          break;
        case "es":
          result = collection.find({
            titleES: { $regex: equipmentName, $options: "i" },
          });
          break;
        case "PT":
          result = collection.find({
            titlePT: { $regex: equipmentName, $options: "i" },
          });
          break;
        default:
          result = collection.find({
            titleFR: { $regex: equipmentName, $options: "i" },
          });
          break;
      }
      return result.limit(7000).toArray();
    } catch (error) {
      debug(error);
      errorHandler.logError(error);
    }
  },
  async getEquipmentsByEverything(
    equipmentName = "",
    rarities = ["1", "2", "3", "4", "5", "6", "7"],
    positions = [
      "casque",
      "amulette",
      "plastron",
      "anneau",
      "bottes",
      "cape",
      "epaulettes",
      "ceinture",
      "montures",
      "bouclier",
      "dague",
      "une main",
      "deux mains",
      "emblème",
      "familiers",
      "outil",
    ],
    minLvl = 0,
    maxLvl = 230,
    lang = "fr"
  ) {
    try {
      let result;
      const positionRegex = new RegExp(positions.join("|"), "i");
      const rarityQuery = rarities.map((rarity) => ({
        rarity: parseInt(rarity),
      }));

      const query = {
        positionFR: { $regex: positionRegex },
        level: { $gte: minLvl, $lte: maxLvl },
        $or: rarityQuery,
      };
      if (equipmentName) {
        query.titleFR = { $regex: equipmentName, $options: "i" };
      }

      const project = {
        _id: 0,
        titleFR: 1,
        rarity: 1,
        positionFR: 1,
        level: 1,
        gfxId: 1,
        "equipEffects.effect": 1,
        "equipEffects.fr": 1,
        "equipEffects.params": 1,
      };
      const sort = { level: -1, titleFR: 1, rarity: -1 };

      switch (lang) {
        case "fr":
          result = collection.find(query).project(project).sort(sort);

          break;
      }
      return result.limit(500).toArray();
    } catch (error) {
      debug(error);
      errorHandler.logError(error);
    }
  },
};
module.exports = equipmentsModel;
