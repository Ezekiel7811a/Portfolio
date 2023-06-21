const spellsModel = require("../models/spellsModel");

const spellsController = {
  async queryManager(req, res) {
    const queryType = req.body.queryType;
    const spellName = req.body.spellName;
    const className = req.body.class;
    const lang = req.body.lang;
    switch (queryType) {
      case "getSpellsByName":
        const spellsByName = await spellsModel.getSpellsByName(spellName, lang);
        if (!spellsByName) {
          return res.status(404).json({
            message: "There are no spells with that name",
          });
        }
        res.json(spellsByName);
        break;
      case "getSpellsByClass":
        const spellsByClass = await spellsModel.getSpellsByClass(
          className,
          lang
        );
        if (!spellsByClass) {
          return res.status(404).json({
            message: "Bad request ? Did you modify something ?",
          });
        }
        res.json(spellsByClass);
        break;
    }
  },
};

module.exports = spellsController;
