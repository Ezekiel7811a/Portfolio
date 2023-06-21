const fs = require("fs");

// Load the JSON files
const items = JSON.parse(fs.readFileSync("items.json"));
const actions = JSON.parse(fs.readFileSync("actions.json"));
const equipmentItemTypes = JSON.parse(
  fs.readFileSync("equipmentItemTypes.json")
);
const itemProperties = JSON.parse(fs.readFileSync("itemProperties.json"));

// Create a map of action IDs to action objects
const actionsMapEffect = {};
actions.forEach((action) => {
  actionsMapEffect[action.definition.id] = action.definition.effect;
});

// Create a map of action IDs to action descriptions

const actionsMapDescriptionFR = {};
actions.forEach((action) => {
  if (action.description) {
    actionsMapDescriptionFR[action.definition.id] = action.description.fr;
  }
});

const actionsMapDescriptionEN = {};
actions.forEach((action) => {
  if (action.description) {
    actionsMapDescriptionEN[action.definition.id] = action.description.en;
  }
});

const actionsMapDescriptionES = {};
actions.forEach((action) => {
  if (action.description) {
    actionsMapDescriptionES[action.definition.id] = action.description.es;
  }
});

const actionsMapDescriptionPT = {};
actions.forEach((action) => {
  if (action.description) {
    actionsMapDescriptionPT[action.definition.id] = action.description.pt;
  }
});

// Create a map of equipment type IDs to equipment type objects
const equipmentTypesMap = {};
equipmentItemTypes.forEach((equipmentType) => {
  equipmentTypesMap[equipmentType.definition.id] = equipmentType.title;
});

// Create a map of property IDs to property objects
const propertiesMap = {};
itemProperties.forEach((property) => {
  propertiesMap[property.id] = property;
});
// Process each item and output the revised object
let counter = 0;
const revisedItems = [];
items.forEach((item) => {
  counter++;
  if (
    item.definition.item.baseParameters.itemTypeId === 812 ||
    item.definition.item.baseParameters.itemTypeId === 811
  ) {
    return;
  }
  const revisedItem = {
    id: item.definition.item.id,
    titleFR: item.title.fr.trim(),
    titleEN: item.title.en.trim(),
    titleES: item.title.es.trim(),
    titlePT: item.title.pt.trim(),
    descriptionFR: item.description
      ? item.description.fr.trim()
      : "No Description Found",
    descriptionEN: item.description
      ? item.description.en.trim()
      : "No Description Found",
    descriptionES: item.description
      ? item.description.es.trim()
      : "No Description Found",
    descriptionPT: item.description
      ? item.description.pt.trim()
      : "No Description Found",
    level: item.definition.item.level,
    positionFR:
      equipmentTypesMap[item.definition.item.baseParameters.itemTypeId].fr,
    positionEN:
      equipmentTypesMap[item.definition.item.baseParameters.itemTypeId].en,
    positionES:
      equipmentTypesMap[item.definition.item.baseParameters.itemTypeId].es,
    positionPT:
      equipmentTypesMap[item.definition.item.baseParameters.itemTypeId].pt,
    rarity: item.definition.item.baseParameters.rarity,
    minimumShardSlotNumber:
      item.definition.item.baseParameters.minimumShardSlotNumber,
    maximumShardSlotNumber:
      item.definition.item.baseParameters.maximumShardSlotNumber,
    useCostAp: item.definition.item.useParameters.useCostAp,
    useCostMp: item.definition.item.useParameters.useCostMp,
    useCostWp: item.definition.item.useParameters.useCostWp,
    useRangeMin: item.definition.item.useParameters.useRangeMin,
    useRangeMax: item.definition.item.useParameters.useRangeMax,
    useTestFreeCell: item.definition.item.useParameters.useTestFreeCell,
    useTestLos: item.definition.item.useParameters.useTestLos,
    useTestOnlyLine: item.definition.item.useParameters.useTestOnlyLine,
    useTestNoBorderCell: item.definition.item.useParameters.useTestNoBorderCell,
    useWorldTarget: item.definition.item.useParameters.useWorldTarget,
    gfxId: item.definition.item.graphicParameters.gfxId,
    properties: item.definition.item.properties.map(
      (propertyId) => propertiesMap[propertyId]
    ),
    useEffects: item.definition.useEffects.map((effect) => ({
      effect: actionsMapEffect[effect.effect.definition.actionId],
      fr: actionsMapDescriptionFR[effect.effect.definition.actionId],
      en: actionsMapDescriptionEN[effect.effect.definition.actionId],
      es: actionsMapDescriptionES[effect.effect.definition.actionId],
      pt: actionsMapDescriptionPT[effect.effect.definition.actionId],
      params: effect.effect.definition.params,
    })),
    useCriticalEffects: item.definition.useCriticalEffects.map((effect) => ({
      effect: actionsMapEffect[effect.effect.definition.actionId],
      fr: actionsMapDescriptionFR[effect.effect.definition.actionId],
      en: actionsMapDescriptionEN[effect.effect.definition.actionId],
      es: actionsMapDescriptionES[effect.effect.definition.actionId],
      pt: actionsMapDescriptionPT[effect.effect.definition.actionId],
      params: effect.effect.definition.params,
    })),
    equipEffects: item.definition.equipEffects.map((effect) => ({
      effect: actionsMapEffect[effect.effect.definition.actionId],
      fr: actionsMapDescriptionFR[effect.effect.definition.actionId],
      en: actionsMapDescriptionEN[effect.effect.definition.actionId],
      es: actionsMapDescriptionES[effect.effect.definition.actionId],
      pt: actionsMapDescriptionPT[effect.effect.definition.actionId],
      params: effect.effect.definition.params,
    })),
  };
  revisedItems.push(revisedItem);
});

// Write the revised items to a file
fs.writeFileSync("Equipments.json", JSON.stringify(revisedItems, null, 2));
