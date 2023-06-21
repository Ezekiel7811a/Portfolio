const Joi = require("joi");

const queryEquipmentSchema = Joi.object({
  queryType: Joi.string().required(),
  singleId: Joi.number(),
  equipmentName: [Joi.string().optional(), Joi.allow(null)],
  minLvl: Joi.number(),
  maxLvl: Joi.number(),
  rarities: Joi.array(),
  positions: Joi.array(),
  lang: Joi.string(),
});

const querySpellSchema = Joi.object({
  queryType: Joi.string().required(),
  spellName: Joi.string(),
  spellElement: Joi.string(),
  class: Joi.string(),
  lang: Joi.string(),
});

const queryModifierSchema = Joi.object({
  queryType: Joi.string().required(),
  modifierOrigin: Joi.string(),
  lang: Joi.string(),
});

module.exports = {
  queryEquipmentSchema,
  querySpellSchema,
  queryModifierSchema,
};
