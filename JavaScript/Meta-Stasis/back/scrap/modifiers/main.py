import addNewBuff
import json
import mergeAllJson

classes = ["feca", "zobal"]
data = []

meteorite = {
        "id": 6981,
        "origin": "feca",
        "name":{
            "fr":"Bâton",
            "en":"Staff",
            "es":"Bastón",
            "pt": "Bastão"
        },
        "spellEffects":{
            "percentMeleeDamage":40,
            "percentDistanceDamage":0,
            "percentDamage":0,
            "criticalChance":0,
            "masteries":0,
            "criticalMasteries":0
        },
        "target":"ally"
    }


#---------------------- AJOUTER UN BUFF A UNE CLASSE -----------------------------
#addNewBuff.addNewBuff("zobal", meteorite)


#------------------------ MERGE TOUTES LES CLASSES --------------------------------
for elem in classes:
    with open("back/scrap/modifiers/{elem}.json".format(elem=elem), 'r', encoding="utf-8") as file:
        for struct in json.load(file):
            data.append(struct)

mergeAllJson.mergeAllJson(data)