const modifiersModel = require("../models/modifiersModel");

const modifiersController = {
  async queryManager(req, res) {
    const queryType = req.body.queryType;
    const modifierOrigin = req.body.modifierOrigin;
    // const lang = req.body.lang;
    switch (queryType) {
      case "getModifierByOrigin":
        const modifierByOrigin = await modifiersModel.getModifierByOrigin(modifierOrigin);
        if (!modifierByOrigin) {
          return res.status(404).json({
            message: "There is no modifier from this origin",
          });
        }
        res.json(modifierByOrigin);
        break;
    }
  },
};

module.exports = modifiersController;
