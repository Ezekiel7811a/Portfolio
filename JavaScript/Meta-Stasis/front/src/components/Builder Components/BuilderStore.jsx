import { createStore } from "solid-js/store";
import { createSignal, createEffect, on } from "solid-js";
//in this file we want to store the current Search made by the user and update it as needed
//TODO function to go back to previous search by making maybe 2-3 stores for previous requests

export const [minLevel, setMinLevel] = createSignal(
  JSON.parse(localStorage.getItem(`minLevelBuilderSearch`)) || 0
);
export const [maxLevel, setMaxLevel] = createSignal(
  JSON.parse(localStorage.getItem(`maxLevelBuilderSearch`)) || 230
);

export const [selectedRarities, setSelectedRarities] = createStore({
  rarities: [
    { rarity: 1, selected: false },
    { rarity: 2, selected: false },
    { rarity: 3, selected: false },
    { rarity: 4, selected: false },
    { rarity: 5, selected: false },
    { rarity: 6, selected: false },
    { rarity: 7, selected: false },
  ],
});

export const [selectedPositions, setSelectedPositions] = createStore({
  positions: [
    { position: "casque", selected: false },
    { position: "amulette", selected: false },
    { position: "plastron", selected: false },
    { position: "anneau", selected: false },
    { position: "bottes", selected: false },
    { position: "cape", selected: false },
    { position: "epaulettes", selected: false },
    { position: "ceinture", selected: false },
    { position: "montures", selected: false },
    { position: "bouclier", selected: false },
    { position: "dague", selected: false },
    { position: "unemain", selected: false },
    { position: "deuxmains", selected: false },
    { position: "emblème", selected: false },
    { position: "familiers", selected: false },
    { position: "outil", selected: false },
  ],
});

//monocible, zone, melee, distance, berserk, crit, mcrit, dos, soin, elem, monoelem, duoelem, trielem, PA, PM, PW, PV, PO, esquive, tacle, res, monores, duores, trires, critres, dosres, armureobtenue, armuredonnee, parade, controle, sagesse, prospection, volonte

// on peut probablement enlever selected pour juste avoir la qty, la qty peut être un empty string "" lorsque non spécifié, ce qui signifie qu'un utilisateur qui rentre juste 1 pour la maitrise mono par exemple n'aura que des objets qui donne au moins 1 de maitrise mono, idéalement permettre de changer la quantité avec la molette et avec d'autres boutons sur les côtés pour mobile.

//important d'ajouter les statistiques négatives car peuvent être utiles pour gérer les conditions.
//se renseigner sur la gestion des conditions rapidement pour savoir si l'on veut pouvoir trier par condition ou simplement les utiliser dans le cadre d'un build.

export const selectedStatsStore = createStore({
  stats: [
    { stat: "monocible", min: "", max: "" },
    { stat: "zone", min: "", max: "" },
    { stat: "melee", min: "", max: "" },
    { stat: "distance", min: "", max: "" },
    { stat: "berserk", min: "", max: "" },
    { stat: "crit", min: "", max: "" },
    { stat: "mcrit", min: "", max: "" },
    { stat: "dos", min: "", max: "" },
    { stat: "soin", min: "", max: "" },
    { stat: "elem", min: "", max: "" },
    { stat: "monoelem", min: "", max: "" },
    { stat: "duoelem", min: "", max: "" },
    { stat: "trielem", min: "", max: "" },
    { stat: "PA", min: "", max: "" },
    { stat: "PM", min: "", max: "" },
    { stat: "PW", min: "", max: "" },
    { stat: "PV", min: "", max: "" },
    { stat: "PO", min: "", max: "" },
    { stat: "esquive", min: "", max: "" },
    { stat: "tacle", min: "", max: "" },
    { stat: "res", min: "", max: "" },
    { stat: "monores", min: "", max: "" },
    { stat: "duores", min: "", max: "" },
    { stat: "trires", min: "", max: "" },
    { stat: "critres", min: "", max: "" },
    { stat: "dosres", min: "", max: "" },
    { stat: "armureobtenue", min: "", max: "" },
    { stat: "armuredonnee", min: "", max: "" },
    { stat: "parade", min: "", max: "" },
    { stat: "controle", min: "", max: "" },
    { stat: "sagesse", min: "", max: "" },
    { stat: "prospection", min: "", max: "" },
    { stat: "volonte", min: "", max: "" },
  ],
});

// export const [displayedEquipments, setDisplayedEquipments] = createStore([]) //used later for display
export const displayedEquipmentsStore = createStore({
  displayedEquipments: [],
}); //testing with this syntax
export const [displayedEquipments, setDisplayedEquipments] = createSignal(
  displayedEquipmentsStore.displayedEquipments
);

export const [selectedStats, setSelectedStats] = createSignal([
  { stat: "monocible", min: "", max: "" },
  { stat: "zone", min: "", max: "" },
  { stat: "melee", min: "", max: "" },
  { stat: "distance", min: "", max: "" },
  { stat: "berserk", min: "", max: "" },
  { stat: "crit", min: "", max: "" },
  { stat: "mcrit", min: "", max: "" },
  { stat: "dos", min: "", max: "" },
  { stat: "soin", min: "", max: "" },
  { stat: "elem", min: "", max: "" },
  { stat: "monoelem", min: "", max: "" },
  { stat: "duoelem", min: "", max: "" },
  { stat: "trielem", min: "", max: "" },
  { stat: "PA", min: "", max: "" },
  { stat: "PM", min: "", max: "" },
  { stat: "PW", min: "", max: "" },
  { stat: "PV", min: "", max: "" },
  { stat: "PO", min: "", max: "" },
  { stat: "esquive", min: "", max: "" },
  { stat: "tacle", min: "", max: "" },
  { stat: "res", min: "", max: "" },
  { stat: "monores", min: "", max: "" },
  { stat: "duores", min: "", max: "" },
  { stat: "trires", min: "", max: "" },
  { stat: "critres", min: "", max: "" },
  { stat: "dosres", min: "", max: "" },
  { stat: "armureobtenue", min: "", max: "" },
  { stat: "armuredonnee", min: "", max: "" },
  { stat: "parade", min: "", max: "" },
  { stat: "controle", min: "", max: "" },
  { stat: "sagesse", min: "", max: "" },
  { stat: "prospection", min: "", max: "" },
  { stat: "volonte", min: "", max: "" },
]);
