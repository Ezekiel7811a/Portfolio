const client = require("../db/mongo");
const errorHandler = require("../service/errorHandler");
const debug = require("debug")("model-spells");

const db = client.db("Metastasis");
const collection = db.collection("Modifiers");

const modifiersModel = {
  async getModifierByOrigin(modifierOrigin, lang) {
    try {
      let result;
      switch (lang) {
        case "fr":
          result = collection.find({ origin: modifierOrigin });
          break;
        default:
          result = collection.find({ origin: modifierOrigin });
          break;
      }

      return result.limit(10).toArray();
    } catch (error) {
      debug(error);
      errorHandler.logError(error);
    }
  }
};
module.exports = modifiersModel;
