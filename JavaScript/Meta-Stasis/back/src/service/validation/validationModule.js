const errorHandler = require("../errorHandler");
const { queryEquipmentSchema, querySpellSchema, queryModifierSchema } = require("./schema");

const validationModule = {
  valideEquipmentQuery(req, res, next) {
    const { error } = queryEquipmentSchema.validate(req.body);
    if (error) {
      errorHandler._400(req);
    } else {
      next();
    }
  },
  valideSpellQuery(req, res, next) {
    const { error } = querySpellSchema.validate(req.body);
    if (error) {
      errorHandler._400(req);
    } else {
      next();
    }
  },
  valideModifierQuery(req, res, next) {
    const { error } = queryModifierSchema.validate(req.body);
    if (error) {
      errorHandler._400(req);
    } else {
      next();
    }
  },
};

module.exports = validationModule;
