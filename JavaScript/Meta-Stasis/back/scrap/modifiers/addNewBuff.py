import json

def addNewBuff(className, buffToAdd):
    with open("back/scrap/modifiers/{elem}.json".format(elem=className), 'r', encoding="utf-8") as file:
        data = json.load(file)

        data.append(buffToAdd)

    with open("back/scrap/modifiers/{elem}.json".format(elem=className), 'w', encoding="utf-8") as file:
        json.dump(data, file, indent=1, ensure_ascii=False)