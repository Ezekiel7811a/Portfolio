const client = require("../db/mongo");
const errorHandler = require("../service/errorHandler");
const debug = require("debug")("model-spells");

const db = client.db("Metastasis");
const collection = db.collection("Spells");

const spellsModel = {
  async getSpellsByName(spellName, lang) {
    try {
      let result;
      switch (lang) {
        case "fr":
          result = collection.find({
            name: { $regex: spellName, $options: "i" },
          });
          break;
        case "en":
          result = collection.find({
            titleEN: { $regex: spellName, $options: "i" },
          });
          break;
        case "es":
          result = collection.find({
            titleES: { $regex: spellName, $options: "i" },
          });
          break;
        case "PT":
          result = collection.find({
            titlePT: { $regex: spellName, $options: "i" },
          });
          break;
        default:
          result = collection.find({
            titleFR: { $regex: spellName, $options: "i" },
          });
          break;
      }

      return result.limit(10).toArray();
    } catch (error) {
      debug(error);
      errorHandler.logError(error);
    }
  },
  async getSpellsByClass(spellClass, lang) {
    try {
      let result;
      switch (lang) {
        case "fr":
          result = collection.find(
            { class: spellClass }
            // {nameEN : 0, namePT : 0, nameES : 0}   // for each language we filter out the other languages in the projction
          );
          break;
        case "en":
          result = collection.find({ class: spellClass });
          break;
        case "es":
          result = collection.find({ class: spellClass });
          break;
        case "PT":
          result = collection.find({ class: spellClass });
          break;
        default:
          result = collection.find({ class: spellClass });
          break;
      }
      return result.toArray();
    } catch (error) {
      debug(error);
      errorHandler.logError(error);
    }
  },
};
module.exports = spellsModel;
