import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

export const [classValue, setClassValue] = createStore({"value":"feca"});
export const [spellValue, setSpellValue] = createStore({"value":0});
export const [modifierValue, setModifierValue] = createStore({"value":1});

export const [resistanceValue, setResistanceValue] = createStore({
    "water":200,
    "fire":80,
    "earth":600,
    "wind":4,
    "waterPourcent":4,
    "firePourcent":5,
    "earthPourcent":6,
    "windPourcent":7
});

export const [maitriseValue, setMaitriseValue] = createStore({"value":0});
export const [DIValue, setDIValue] = createStore({"value":0});
export const [checkedSpell, setCheckedSpell] = createSignal("")
export const [classes, setClasses] = createSignal([
    "feca",
    "osamodas",
    "enutrof",
    "sram",
    "xelor",
    "ecaflip",
    "eniripsa",
    "iop",
    "cra",
    "sadida",
    "sacrieur",
    "pandawa",
    "roublard",
    "zobal",
    "ouginak",
    "steamer",
    "eliotrope",
    "huppermage",
])
export const [selectedTeam, setSelectedTeam] = createStore([
    {
        "value":"zobal"
    },
    {
        "value":"feca"
    }
])